import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { PawTrail } from "@/components/PawPrint";
import heroPets from "@/assets/hero-pets.jpg";
import dogWalking from "@/assets/dog-walking.jpg";
import petSitting from "@/assets/pet-sitting.jpg";
import overnight from "@/assets/overnight.jpg";
import smartPuppy from "@/assets/smart-puppy.jpg";
import emergencyPet from "@/assets/emergency-pet.jpg";
import blogCatBond from "@/assets/blog-cat-bond.jpg";
import blogSeniorDog from "@/assets/blog-senior-dog.jpg";
import blogPuppyTraining from "@/assets/blog-puppy-training.jpg";

const photos = [
  { src: heroPets, alt: "Two Golden Retrievers on a cobblestone path" },
  { src: dogWalking, alt: "Dog out for a walk in Cincinnati" },
  { src: petSitting, alt: "Happy dog during a pet sitting visit" },
  { src: overnight, alt: "Dog relaxing during overnight pet sitting" },
  { src: smartPuppy, alt: "Jack Russell puppy with a teddy bear" },
  { src: emergencyPet, alt: "Scottish Fold cat being hand-fed a treat" },
  { src: blogCatBond, alt: "Cat sleeping on a person's chest" },
  { src: blogSeniorDog, alt: "Senior dog resting on a couch" },
  { src: blogPuppyTraining, alt: "Beagle puppy during training" },
];

const Gallery = () => (
  <Layout>
    <SEO
      title="Pet Photo Gallery | Professional Pet Nanny Cincinnati"
      description="See the happy dogs and cats we care for across Greater Cincinnati & Northern Kentucky. Dog walking, pet sitting, overnight care and more."
      path="/gallery"
    />

    <section className="relative overflow-hidden bg-hero text-white">
      <PawTrail />
      <div className="container-px mx-auto py-20 text-center">
        <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">Gallery</span>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-black leading-[1] sm:text-6xl">
          Our happy <span className="text-gradient">clients</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
          A few of the tails and whiskers we get to care for every day.
        </p>
      </div>
    </section>

    <section className="container-px mx-auto py-20">
      <SectionHeading eyebrow="Photos" title={<>Tails, whiskers, <span className="text-gradient">and smiles</span></>} />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p, i) => (
          <figure key={p.alt} className="reveal card-hover overflow-hidden rounded-2xl border border-border bg-card shadow-card" style={{ transitionDelay: `${i * 40}ms` }}>
            <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </figure>
        ))}
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Gallery;
