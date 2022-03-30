import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';

export let meta: MetaFunction = () => {
  return {
    title: 'Remax',
    description: 'All the things Jesse Tomchak',
  };
};

export let links: LinksFunction = () => {
  return [];
};

export let loader: LoaderFunction = async ({ request }) => {
  return {
    title: 'remax workers',
  };
};

export default function Index() {
  let { title } = useLoaderData();

  return (
    <div>
      <div className="sm:px-10 p-5">
        <h2 className="mt-6 text-xl">{title}</h2>
        <p className="py-2">getting this started</p>

        <a
          className="inline-block border hover:border-black px-4 py-2 mt-2"
          href="https://github.com/edmundhung/remix-worker-template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </div>
    </div>
  );
}
