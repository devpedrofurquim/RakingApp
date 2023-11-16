import RankItemsContainer from "./components/RankItemsContainer";
import LanguageImages from "./components/Images";
import FrameworkImages from "./components/FrameworkImages";

const AppRoutes = [
  {
    index: true,
        element: <RankItemsContainer dataType={1} imgArr={LanguageImages} />
  },
  {
    path: '/rank-languages',
    element: <RankItemsContainer dataType={1} imgArr={LanguageImages} />
    },
    {
    path: '/rank-frameworks',
    element: <RankItemsContainer dataType={2} imgArr={FrameworkImages} />
    }
];

export default AppRoutes;
