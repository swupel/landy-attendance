import { lazy } from "react";
import { Helmet } from "react-helmet-async";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const TeamBlock = lazy(() => import("../../components/TeamBlock"));

const Team = () => {
    return (
        <Container>
            <Helmet>
                <title>Our Team - MarkMePresent</title>
                <meta name="description" content="Meet the MarkMePresent team." />
            </Helmet>
            <ScrollToTop />
            <TeamBlock />
        </Container>
    );
};

export default Team;
