import { GetPaths, PathParams } from './base';

type Path = 'landing';

type PathsParams = PathParams<
    Path,
    {
        landing: null;
    }
>;

export const getPublicPaths: GetPaths<PathsParams> = {
    landing: () => '/',
};
