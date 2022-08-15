import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animation";
import { stagger } from "../animation";

const index = ({endpoint}) => {

  console.log(endpoint)
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 text-base font-medium">
        I am currently attending a bootcamp polishing my skills as a developer,
        I consider myself self-taught and with skills to learn day by day, I
        have no experience but I have worked on several projects over the last
        few months, I consider myself a full stack developer.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-semibold tracking-wide">
          What I Offer
        </h6>
        <motion.div
          className="grid gap-6 my-3 md:grid-cols-2"
          variants={stagger}
        >
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  const data = await res.json();
  console.log(data);
  return { props: { endpoint: process.env.VERCEL_URL } };
};

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   console.log(context);

//   const res = await fetch("http://localhost:3000/api/services");
//   const { services } = await res.json();
//   console.log({ services });
//   return { props: { services: services } };
// };
