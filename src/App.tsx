import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Link } from "react-router-dom";
import ImageClassifierPage from "./pages/image_classifier_page";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={
        <>
          <h1>Hi!</h1>
          <p>Not a lot of thing here yet but some cool stuff:</p>
          <Link to="/image-classifier">Image Classifier</Link> 
        </>
        } />
      <Route path="/image-classifier" element={<ImageClassifierPage />} />
      <Route path="/*" element={
        <>
        <h1>Nothing here!</h1>
        <p>Are you lost?</p>
        <Link to="/">Take me home!</Link> 
      </>
      } />
      </>
    ), {basename: import.meta.env.BASE_URL}
  );

  return <RouterProvider router={router} />
}

export default App
