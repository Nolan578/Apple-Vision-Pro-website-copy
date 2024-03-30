
const Page9 = () => {
  return (
    <div className="bg-black">
      <div id="page17">
        <h4>Technology</h4>
        <h1>
          Innovation you can <br /> see, hear, and feel.
        </h1>
        <p>
          <span>Pushing boundaries from the inside out.</span> Spatial
          experiences on Vision Pro are only possible through groundbreaking
          Apple technology. Displays the size of a postage stamp that deliver
          more pixels than a 4K TV to each eye. Incredible advances in Spatial
          Audio. A revolutionary dual‑chip design featuring custom Apple
          silicon. A sophisticated array of cameras and sensors. All the
          elements work together to create an unprecedented experience you have
          to see to believe.
        </p>
      </div>
      <div id="page18">
        <canvas></canvas>
      </div>
      <div id="page19">
        <h1>More pixels than a 4K TV. For each eye.</h1>
        <h5>
          The custom micro‑OLED display system features 23 million pixels,
          delivering stunning resolution and colors. And a specially designed
          three‑element lens creates the feeling of a display that’s everywhere
          you look.
        </h5>
      </div>
      <div id="page20">
        <video
          src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/spatial-audio/large.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div id="center-page20">
          <h1>
            Our most advanced <br /> Spatial Audio system ever.
          </h1>
          <p>
            Dual-driver audio pods positioned next to each ear deliver
            personalized sound while letting you hear what’s around you. Ambient
            Spatial Audio makes sounds feel like they’re coming from your
            surroundings. And with audio raytracing, Vision Pro analyzes your
            room’s acoustic properties — including the physical materials — to
            adapt and match sound to your space.
          </p>
        </div>
      </div>
      <div id="page21">
        <img
          id="troff"
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/eye_tracking_off__fx6m2dj3mlqq_large.jpg"
          alt=""
        />
        <img
          id="tron"
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/eye_tracking_on__ln11reqs6mi6_large.jpg"
          alt=""
        />
      </div>
      <div className="overlay">
        <h1>Responsive, precision eye tracking.</h1>
        <h5>
          A high-performance eye tracking system of LEDs and infrared cameras
          projects invisible light patterns onto each eye. This advanced system
          provides ultraprecise input without your needing to hold any
          controllers, so you can accurately select elements just by looking at
          them.
        </h5>
      </div>
      <div id="page22">
        <img
          id="snroff"
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_off__cfzcmow4c3f6_large.jpg"
          alt=""
        />

        <img
          id="snron"
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_all__dp0a8e4y4u4i_large.jpg"
          alt=""
        />
      </div>
      <div className="overlay">
        <h1>A sophisticated sensor array.</h1>
        <h5>
          A pair of high-resolution cameras transmit over one billion pixels per
          second to the displays so you can see the world around you clearly.
          The system also helps deliver precise head and hand tracking and
          real‑time 3D mapping, all while understanding your hand gestures from
          a wide range of positions.
        </h5>
      </div>
      <div className="mt-[100px] flex w-[100%] items-center justify-center">
        <img
          src="https://www.apple.com/v/apple-vision-pro/a/images/overview/technology/features/sensors_chips__s805s5o3gkii_medium.jpg"
          alt=""
        />
      </div>
      <div className="text-white">
        <h1 className="text-center text-3xl font-[700]">
          Revolutionary dual‑chip <br /> performance.
        </h1>
        <p className="mt-5 text-center text-[#86868BFF]">
          A unique dual‑chip design enables the spatial experiences on
          <br /> Apple Vision Pro. The powerful M2 chip simultaneously runs
          <br />
          visionOS, executes advanced computer vision algorithms, and <br />
          delivers stunning graphics, all with incredible efficiency. And the{" "}
          <br /> brand-new R1 chip is specifically dedicated to process input
          from the <br /> cameras, sensors, and microphones, streaming images to
          the displays within 12 milliseconds — for a virtually lag-free,
          real-time <br /> view of the world.
        </p>
        <div className="mt-5 flex items-center justify-center">
          <button className="rounded-[30px] bg-white px-5 py-3 text-2xl font-[600]  text-black">
            + Learn more about technology
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page9