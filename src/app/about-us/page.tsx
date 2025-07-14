"use client";
import Slider from "@/components/Slider";

const About = () => {
    return (
        <>
            <Slider />
            <section className="p-10 ml-64 mr-64 min-h-screen">
                <h1 className="font-bold text-2xl mb-4">About Us</h1>
                <p className="mb-4">
                    At Zappo Enterprises, we believe that sports should be for everyone. Whether you’re a weekend
                    warrior, a seasoned athlete, or just beginning your fitness journey, our mission is to bring the
                    world of sports closer to you with high-quality, affordable, and accessible gear for every activity.
                </p>
                <p className="mb-4">
                    Founded on the passion for promoting active lifestyles, Zappo Enterprises offers a diverse range of
                    products across multiple sports, from cycling and running to hiking, swimming, and team sports.
                    We’re not just about selling equipment, we’re about empowering you to chase your goals, break your
                    limits, and enjoy every moment on the field, track, or trail.
                </p>
                <p className="mb-4">
                    What sets us apart? It&apos;s our commitment to innovation, sustainability, and community. We
                    partner with top brands and invest in cutting-edge technology to ensure that every piece of gear we
                    offer meets the highest standards of performance and durability. We also take pride in our
                    dedication to sustainable practices, ensuring our products are not only built to last but also kind
                    to the planet.
                </p>
                <p className="mb-4">
                    Whether you&apos;re shopping online or visiting one of our stores, our goal is to make your sporting
                    experience better. At Zappo Enterprises, we&apos;re here to support your active lifestyle every step
                    of the way—because when you move, we move.
                </p>
            </section>
        </>
    );
};
export default About;
