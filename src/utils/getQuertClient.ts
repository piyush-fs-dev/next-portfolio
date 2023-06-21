import { QueryClient } from "react-query";
import { cache } from "react";


// Not Of use right now
const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;
