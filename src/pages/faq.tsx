export default function Faq() {
  return (
    <div className="flex flex-col gap-1 p-2">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is this sindi.cat?
        </div>
        <div className="collapse-content">
          <p>
            In an increasingly globalized world where remote jobs have a greater
            presence, the lack of collective organization environments, where
            the proletariat could freely express their ideas and self-manage
            against employers, is felt. sindi.cat is a digital platform designed
            to allow workers from around the world to organize and collaborate
            remotely, securely, and anonymously.
          </p>
          <p>
            This platform will offer a variety of tools and resources to help
            workers come together and form unions, establish common goals, plan
            and coordinate collective actions, and promote their labor interests
            and rights.
          </p>
          <p>
            In addition to providing a secure platform for union organization,
            the project will also strive to provide information and resources to
            help workers understand their labor rights and how to enforce them.
          </p>
          <p>
            This platform will also be an online community where workers can
            discuss and share information about their working conditions, as
            well as receive advice and support from other members. Remote
            workers are the key audience of sindi.cat, as they may have more
            difficulties in connecting and collaborating with their peers on
            labor rights issues. A specially designed solution will be offered
            for workers who do not have a physical place to meet and organize in
            a traditional manner. However, it is important to note that the
            platform is not limited exclusively to remote workers. It will be
            designed to help all workers seeking ways to protect and promote
            their rights, regardless of their sector, level of experience, or
            geographical location.
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Do you collect my data?
        </div>
        <div className="collapse-content">
          <p>
            Yes, as described in the Privacy and Data Protection Notice, the
            website "sindi.cat" collects and processes personal data in order to
            provide its services. When you use the website, certain information
            such as your account details, communications, and interactions may
            be collected and stored. It is important to review the detailed
            Privacy and Data Protection Notice for a comprehensive understanding
            of how your data is collected, used, and protected by the website.
          </p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How was this website made?
        </div>
        <div className="collapse-content">
          <p>
            The website "sindi.cat" was built using a combination of
            technologies and frameworks. Here is a brief technical description
            of how the website was made:
          </p>
          <ul className="list-disc pl-8">
            <li>
              Front-end: The front-end of the website was developed using React,
              a popular JavaScript library for building user interfaces.
              Next.js, a framework built on top of React, was used to enhance
              the development experience and provide server-side rendering and
              Tailwind CSS, a highly customizable CSS framework, was utilized
              for styling and creating a responsive design.
            </li>
            <li>
              Back-end: The back-end of the website was implemented using
              Node.js, a runtime environment for executing JavaScript code on
              the server. Prisma, an ORM (Object-Relational Mapping) tool, was
              utilized for database management and interacting with the
              database. The trpc (TypeScript RPC) library was used to build
              efficient and type-safe APIs for the server-client communication.
              Authentication functionality was implemented using NextAuth, an
              authentication library specifically designed for Next.js
              applications.
            </li>
            <li>
              Database: The website uses a database for storing and retrieving
              data. It utilizes Prisma's database toolkit to interact with the
              database. The specific database management system (e.g.,
              PostgreSQL, MySQL, SQLite) is not mentioned in the information
              provided. Overall, the website combines front-end technologies
              like React, Next.js, and Tailwind CSS with back-end technologies
              like Node.js, Prisma, and trpc to create a platform that allows
              workers to organize, collaborate, and promote their labor rights
              in a remote, secure, and anonymous manner.
            </li>
          </ul>
        </div>
      </div>
      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Where can I find more resources?
        </div>
        <div className="collapse-content">
          <p>
            There are several online resources available for workers and unions
            to access valuable information and support. Here are some
            suggestions on where you can find more resources:
          </p>
          <ul className="list-disc pl-8">
            <li>
              1. International Labour Organization (ILO): The ILO is a United
              Nations agency dedicated to promoting labor rights, decent work,
              and social justice. Their website offers a wide range of
              resources, including publications, research, and tools for workers
              and unions. Visit their website at www.ilo.org.{" "}
            </li>
            <li>
              2. Trade Union Confederations: Trade union confederations at
              national and international levels often provide resources and
              support for workers and unions. Examples include the American
              Federation of Labor and Congress of Industrial Organizations
              (AFL-CIO) in the United States, Trades Union Congress (TUC) in the
              United Kingdom, and International Trade Union Confederation (ITUC)
              globally. Explore the websites of relevant trade union
              confederations in your country or region.
            </li>
            <li>
              3. Labor Rights Organizations: Various labor rights organizations
              focus on advocating for workers' rights and providing resources.
              Examples include Human Rights Watch, Labor Rights Forum, and
              Worker Rights Consortium. These organizations often publish
              reports, studies, and guides related to workers' rights and
              issues. Search for labor rights organizations specific to your
              country or region.
            </li>
            <li>
              4. Government Websites: Government labor departments or ministries
              often have resources and information on labor rights, employment
              laws, and worker protections. Check the official website of your
              country's labor department or ministry for relevant resources.
            </li>
            <li>
              5. Online Communities and Forums: Online communities and forums
              dedicated to workers' rights and unions can provide a platform for
              sharing information, experiences, and resources. Websites like
              Reddit and dedicated labor rights forums can be valuable sources
              of information and support. Participate in relevant communities to
              connect with other workers and gain insights. Remember to evaluate
              the credibility and reliability of the sources you access. It's
              always a good idea to cross-reference information and consult with
              legal experts or trade union representatives for specific advice
              related to your circumstances.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
