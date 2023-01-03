import Head from "next/head";
import { Layout } from "../layouts/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Prabin Subedi (@prabincankod) - Tech enthusiast and high school
          student.
        </title>
        <meta
          name="description"
          content="Prabin Subedi is a high school student with a passion for working with Node.js. Follow his Github profile, @prabincankod, to stay updated on his latest projects and contributions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}
            <div className="mockup-code">
              <pre data-prefix="$">
                <code>coming soon...</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>coming soon...</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>coming soon...</code>
              </pre>
            </div>
            <div>
              <h1 className=" pb-2  font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                I'll be live soon!
              </h1>
              <p className="py-6">
                Prabin's new website is coming soon! Follow{" "}
                <code>
                  <a href="https://github.com/prabincankod">@prabincankod</a>
                </code>{" "}
                on github for updates and be the first to see the new site.
                Thanks for your patience and support!
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
