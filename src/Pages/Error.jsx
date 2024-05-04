import { useRouteError } from "react-router-dom";
import PageContent from "../Components/PageContent";

export default function ErrorPage() {
  const error = useRouteError();
  let title = "An Error Occured !";
  let message = "Something Went wrong";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not Found !";
    message = "Could not fing resource";
  }
  return (
    <>
      {/* <main>
        <h1>An Error Occured!</h1>
      </main> */}
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
