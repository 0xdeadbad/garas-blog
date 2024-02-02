import { PagesFunction, Fetcher } from '@cloudflare/workers-types';
interface Env {
  HYGRAPH_SVC: Fetcher;
}

export const onRequest: PagesFunction<Env> = async context => {
  return context.env.HYGRAPH_SVC.fetch(context.request);
}
