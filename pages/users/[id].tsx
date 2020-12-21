import AccessDeniedIndicator from "components/access-denied-indicator";
import Page from "components/pages/users/[id]";
import fetchUser from "lib/queries/fetch-user";
import queryClient from "lib/react-query-client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

const MyAccountPage: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  session,
  id,
}) => {
  const { data } = useQuery("user", () => fetchUser(parseInt(id as string)));

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <>
      <Head>
        <title>My Account Page</title>
      </Head>
      <Page user={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const session = await getSession({ req });

  await queryClient.prefetchQuery("user", () =>
    fetchUser(parseInt(query.id as string))
  );

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
      id: query.id,
    },
  };
};

export default MyAccountPage;