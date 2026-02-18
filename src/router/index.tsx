import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          const Page = lazy(() => import(`../pages/${routeItem.component}`));
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              render={(props) => (
                <>
                  {routeItem.meta && (
                    <Helmet>
                      {routeItem.meta.title && (
                        <title>{routeItem.meta.title}</title>
                      )}
                      {routeItem.meta.description && (
                        <meta name="description" content={routeItem.meta.description} />
                      )}
                      {routeItem.meta.canonical && (
                        <link rel="canonical" href={routeItem.meta.canonical} />
                      )}
                    </Helmet>
                  )}
                  <Page {...props} />
                </>
              )}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
