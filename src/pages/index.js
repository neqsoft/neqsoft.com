import React from 'react';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import HeroImage from '../svg/hero-image';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            neqsoft
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Native Android and iOS mobile apps
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Mobile Development</p>
              <p className="mt-4">
                Native mobile app development for iOS and Android. Visually pleasant apps to grow your business idea.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Software development</p>
              <p className="mt-4">
                Server, database and desktop software development. From an idea to product implementation, support & maintenance. 
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Consulting</p>
              <p className="mt-4">
                Analysis, plannning and advisory for your next idea or project. Providing solution time and cost estimates.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
