
import bgAbout from "../../../assets/bg-about.jpg";
import { motion as Motion } from "framer-motion";

const Blogs = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 text-center text-white"
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold font-italian">Our Blogs</h1>
          <p className="mt-4 text-lg">
            Explore stories, and tips on relationships, marriage, and culture
            from our experts and community.
          </p>
        </div>
      </section>

      <section className="background-color padding-lr padding-tb mx-auto ">
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white padding-lr padding-tb mx-auto  shadow-xl rounded-3xl  relative"
        >
          {/* <div> */}
          <h1 className="font-bold text-center text-primary text-4xl">
            What Does a Good Matrimonial Profile Look Like and How to Write One
          </h1>

          <p className="text-xl py-8">
            Have you ever sat down to create your matrimonial profile and found
            yourself staring at a blank screen, unsure where to begin? If yes,
            you are not alone. Crafting a profile that captures your true
            personality, values, and dreams can feel overwhelming, but it is the
            first and most important step toward finding a life partner who
            truly connects with you. Today, we are here to guide you through
            this journey, ensuring that your profile stands out gracefully,
            genuinely, and impressively.
          </p>

          <p className="text-xl">
            A matrimonial profile is much more than a formality. It is the first
            glimpse into your life that potential matches and their families
            receive. It speaks volumes about who you are, what you value, and
            what you envision for your future. The right words can spark an
            interest, start a conversation, and eventually, build a lifetime of
            togetherness.
          </p>

          <p className="text-xl py-3">
            Whether you write the profile yourself or use a predesigned
            template, remember to include these details.
          </p>

          <h1 className="font-bold text-primary text-4xl py-6">
            Key elements of an ideal matrimonial profile
          </h1>

          <p className="font-bold text-green-600 text-3xl pt-3">
            Basic Personal Information
          </p>

          <p className="text-xl pt-3">
            When you begin crafting your profile, start with the basics. Share
            your details thoughtfully — your name, date of birth, education,
            occupation, family background, and other essentials. Authenticity
            matters. Providing honest information sets the tone for a
            relationship built on trust and mutual respect.
          </p>

          <p className="text-xl py-3">
            You can share the following details to give others a quick
            introduction about yourself.
          </p>

          <ul className="text-xl list-disc px-9">
            <li>Name</li>
            <li>Date of Birth</li>
            <li>Place of Birth</li>
            <li>Education</li>
            <li>Occupation</li>
            <li>Religion</li>
            <li>Community</li>
            <li>Mother Tongue</li>
            <li>Height</li>
            <li>Weight</li>
            <li>Complexion</li>
            <li>Contact Number</li>
            <li>Residential Address</li>
          </ul>

          <p className="text-xl pt-3">
            You can add other information as well if you are comfortable with
            it, but make sure you don't miss out on any one of these!
          </p>

          <p className="font-bold text-green-600 text-3xl pt-6 pb-3">
            Photograph
          </p>

          <p className="text-xl">
            One element often overlooked but immensely powerful is your
            photograph. A well-taken, recent photo instantly adds warmth and
            credibility to your profile. Choose a simple, natural setting with
            good lighting. Remember, your image is not just about how you look —
            it is about how you feel to someone who sees it for the first time.
          </p>

          <ul className="text-xl list-disc px-9">
            <li>
              Choose a proper image for your profile. It should be a
              high-resolution image with enhanced visual clarity.
            </li>
            <li>
              Do not use filters in the image, and ensure you use a recent
              picture, as it should look as authentic as possible.
            </li>
            <li>
              A genuine smile can speak louder than words, making you
              approachable and relatable{" "}
            </li>
            <li>
              Last but not the least, do not use a group photo. It should be
              your solo image in decent and pleasing attire.
            </li>
            <li>
              You can also use additional candid images with your family, along
              with the solo image.
            </li>
          </ul>

          <p className="font-bold text-green-600 text-3xl  pt-6 pb-3">
            About Myself
          </p>

          <p className="text-xl pt-3">
            Moving deeper into the profile, the 'About Myself' section is your
            true voice. It is your opportunity to describe who you are beyond
            the surface. Share your passions, your career journey, your hobbies,
            and your dreams. Express your beliefs and the values that guide your
            decisions. Let your personality shine through your words. Whether
            you are passionate about technology, the arts, social service, or
            travel, let it be known. Authentic stories and real interests create
            a bond even before a meeting happens.
          </p>

          <ul className="text-xl list-disc px-9">
            <li>
              Begin by mentioning your educational achievements and career
              interests
            </li>
            <li>
              Mention topics or subjects that you are highly interested in. For
              example, if you are a person who is interested in science,
              politics, social affairs, or something like that, please do
              mention them as it helps your prospective matches to feel any sort
              of compatibility with you
            </li>
            <li>
              Express your likes/dislikes, whether it be food, travelling, or
              whatever you feel that can be shared without being offensive.
            </li>
            <li>
              Disclose what kind of person you are in a friendly and cordial
              manner.
            </li>
          </ul>

          <p className="font-bold text-green-600 text-3xl  pt-6 pb-3">
            Family Information
          </p>

          <p className="text-xl pt-3">
            Marriage is not just a union of two individuals, but it is a
            decision that brings two different families from their respective
            worlds together for a lifetime. Family plays an essential role in
            Indian matrimony. So, it is equally important to elaborate on
            details about your family as much as describing yourself.
            Introducing your family respectfully adds warmth and security to
            your profile. Mention your parents, their professions, your
            siblings, and the kind of values your family cherishes. Once you are
            done with these details, you can feel assured that you have given a
            clear picture of your family to your prospective partner. Whether
            you come from a traditional, moderate, or modern background, letting
            others know gives clarity and strengthens compatibility.
          </p>

          <p className="font-bold text-green-600 text-3xl  pt-6 pb-3">
            Expectations
          </p>

          <p className="text-xl pt-3">
            Marriage is not just a union of two individuals, but it is a
            decision that brings two different families from their respective
            worlds together for a lifetime. Family plays an essential role in
            Indian matrimony. So, it is equally important to elaborate on
            details about your family as much as describing yourself.
            Introducing your family respectfully adds warmth and security to
            your profile. Mention your parents, their professions, your
            siblings, and the kind of values your family cherishes. Once you are
            done with these details, you can feel assured that you have given a
            clear picture of your family to your prospective partner. Whether
            you come from a traditional, moderate, or modern background, letting
            others know gives clarity and strengthens compatibility.
          </p>

          <h1 className="font-bold text-center text-primary py-6 text-3xl">
            Tips to make your Matrimonial Profile stand out
          </h1>

          <ul className="text-xl list-disc px-9">
            <li>
              Choose a template that makes your profile look decent and
              attractive with a clean layout. It should not be too decorative or
              disorganised.
            </li>
            <li>
              Throughout your profile, maintain a tone that is polite, genuine,
              and humble
            </li>
            <li>
              Keep your language simple, free of grammatical errors, and easy to
              understand.
            </li>
            <li>
              Avoid exaggerations or boastful language. Instead, let sincerity
              lead the way.Present your opinions clearly and cordially.
            </li>
            <li>
              Keep your expectations concise and reasonable, and do not make a
              lengthy list, as it may give a bad impression of you.
            </li>
            <li>
              Provide authentic details. Remember, authenticity and trust play a
              major role in marriage. So, avoid trying to be fake or misleading.
            </li>
            <li>
              A neat, clean presentation reflects the seriousness and thought
              you have invested in this life decision.
            </li>
          </ul>

          <p className="font-bold text-green-600 text-3xl  pt-6 pb-3">
            Final thoughts
          </p>

          <p className="text-xl pt-3">Creating a matrimonial profile goes beyond just entering basic information about yourself. It’s about presenting an honest and heartfelt image of yourself that can help build a meaningful connection with your future life partner. Take a moment to relax, reflect, and then begin crafting your profile with a calm, clear, and positive mindset.</p>
        </Motion.div>
      </section>
    </>
  );
};

export default Blogs;
