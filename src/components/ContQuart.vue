<template>
  <div class="grid-4">
    <template v-for="n in 4" :key="n">
      <QuartContent :qtr="n" :navi="navi" />
    </template>
  </div>
  <div class="samples fr" v-if="show">
    <div class="col2 fc">
      <div class="sample fc">
        <div class="row3 r1 blue">
          <h2>EXP HIGHLIGHT: Cadetship Program</h2>
          <p>
            Underwent a 6-month intensive training program featuring
            bootcamp-style engineering classes and rotationary immersions under
            the various teams within the Office of the CTO. These provided me
            with hands-on experience with product R&D and DevOps philosophies
            through specialized engineering projects including: <br />
            * Data Analysis Report on Anti-Fraud Detection <br />
            * API Microservice Product Pitch and Development <br />
            * Miniapp-Superapp Ecosystem Recreation
          </p>
        </div>
        <div class="row3">
          <h2>MAYA PHILIPPINES, Inc.</h2>
          <p>Financial Technology Unicorn. Philippines' #1 Online Bank.</p>
          <h3>2021 - 2022: Cadet Engineer</h3>
          <p>6-month intensive training program</p>
          <h3>2022 - 2024: Software Engineer</h3>
          <p>Designation: Product Engineering, Bills Payment Solutions</p>
        </div>
        <div class="row3 r2 pink">
          <div class="fr">
            <img class="imgr" src="@/assets/work-pmya1.jpg" />
            <img class="imgr" src="@/assets/work-pmya2.jpg" />
            <img class="imgr" src="@/assets/work-pmya3.jpg" />
          </div>
        </div>
      </div>
      <div class="sample fr">
        <div class="col3 r4 blue fc">
          <h2>B.S. Management Information Systems</h2>
          <p>Ateneo de Manila University 2016-2021</p>
          <h3>MIS141 & 151</h3>
          <p>
            Designed an Inventory Management System and business case as a
            thesis project aimed to support a partner company
          </p>
          <h3>MIS121 & 122</h3>
          <p>
            Designed an Order Management System with a database and web portal
            ordering system to aid the sales of a partner business
          </p>
          <h3>CS 179.14A&B</h3>
          <p>
            Developed various simple games for my interactive media spec,
            including an Asteroid Shooter game as my final.
          </p>
        </div>
        <div class="col3 fc">
          <h2>Extra-Curriculars</h2>
          <br />
          <h3>AMP . Ateneo Musicians' Pool</h3>
          <p>
            Music production, appreciation, and development school organization.
            <br /><br /><b>OFFICER POSITIONS:</b><br />
            ~ VP for Finance 2019 - 2020 <br />
            ~ Design Dept Head 2018 - 2019 <br />
            ~ Production Deputy 2017 - 2028
          </p>
          <h3>MISA . Management Information Systems Association</h3>
          <p>
            Home organization of BS MIS Students<br />
            HIGHLIGHT: Art Director to multiple projects
          </p>
          <h3>LFC . Loyola Film Circle</h3>
          <p>
            Film & Video production school org.<br />
            HIGHLIGHT: Set Design for Freshman Orientation Film
          </p>
        </div>
        <div class="col3 r4 pink fc">
          Sample MIS Work - Web Design:
          <img class="imgc" src="@/assets/work-mis.png" />
        </div>
      </div>
      <div class="sample fc">
        <!-- <img class="navi" src="@/assets/work-NAVI.png" /> -->
        <div class="row3">
          Navi individuals
          <div class="fr">
            <img class="imgr" src="@/assets/work-navi1.png" />
            <img class="imgr" src="@/assets/work-navi2.png" />
            <img class="imgr" src="@/assets/work-navi3.png" />
          </div>
        </div>
        <div class="row3 imgn">
          <img src="@/assets/work-NAVI.png" />
        </div>
        <div class="row3">
          Midnight Miniatures
          <div class="fr">
            <img class="imgr" src="@/assets/work-mm1.png" />
            <img class="imgr" src="@/assets/work-mm2.png" />
            <img class="imgr" src="@/assets/work-mm3.png" />
            <img class="imgr" src="@/assets/work-mm4.png" />
            <img class="imgr" src="@/assets/work-mm5.png" />
            <img class="imgr" src="@/assets/work-mm6.png" />
            <img class="imgr" src="@/assets/work-mm7.png" />
            <img class="imgr" src="@/assets/work-mm8.png" />
          </div>
        </div>
      </div>
      <div class="sample fr">
        <div class="col3 r5 blue fc">
          <iframe
            src="https://elleinin.github.io/portfolio/redirect.html"
            title="2021 Online Portfolio Easter Egg"
            height="500"
            width="280"
          >
          </iframe>
        </div>
        <div class="col3 r6 pink">
          Sample Work: Music Appreciation Publications
          <div class="fr imgm">
            <img src="@/assets/MAPS1.png" />
            <img src="@/assets/MAPS2.png" />
            <img src="@/assets/MAPS3.png" />
            <img src="@/assets/MAPS4.png" />
            <img src="@/assets/MAPS5.png" />
            <img src="@/assets/MAPS6.png" />
            <img src="@/assets/MAPS7.png" />
            <img src="@/assets/MAPS8.png" />
          </div>
        </div>
      </div>
      <div class="sample fc">
        <div class="row3">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAMPluggedPH%2Fvideos%2F2379349145449597%2F&show_text=false&width=560&t=0"
            height="100%"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div class="row3 amp">
          <h3>ATENEO MUSICIANS POOL</h3>
          <p>
            Most of my time outside academics was spent at a School organization
            called Ateneo Musicians’ Pool, whose mission was to give platform
            for the exposure and development of local music acts.
          </p>
          <h3>AMPLUGGED</h3>
          <p>
            Due to low budget and heavy project workload, this music video
            initiative was a dying project when I first participated in it as a
            design volunteer in my freshman year. Come Sophomore year, I decided
            to keep the project alive and head it myself.
          </p>
        </div>
        <div class="row3">
          <iframe
            height="100%"
            src="https://www.youtube.com/embed/mFKZ4ftuad4?si=C5e9qxgVH2kbOHA6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="col2 fc">
      <div class="sample ft">
        <div class="worktitle">
          SOFTWARE <br />
          ENGINEERING
        </div>
        <div class="body">
          Upon graduating, I entered the FinTech industry as a Software
          Developer bright-eyed about researching and developing solutions to
          make financial services more accessible to the average Filipino. I
          have been lucky to have been trained with and exposed to various tech
          stacks such as MERN/MEVN, mobile dev with Swift and Kotlin, and Data
          Science with Python. I aim to maximise my skillset to explore feasible
          design solutions, how to navigate implementation obstacles, and how to
          make these solutions serve the underprivileged.
        </div>
      </div>
      <div class="sample ft">
        <div class="worktitle">
          PRODUCT DESIGN <br />
          & DIRECTION
        </div>
        <div class="body">
          With a Degrree in M.I.S., my skillset revolves around creating
          solutions by examining and designing systems. My time at ADMU was
          spent contributing my Product knowledge in group projects while my
          extra-curriculars were for indulging in the arts and stepping up for
          leadership positions at passion-focused projects. I was officer to my
          organization’s executive board, spearhead to a series of music videos
          providing platform to local artists, and nourished the growth of my
          peers.
        </div>
      </div>
      <div class="sample ft" v-if="show">
        <div class="worktitle">
          NAVIGATING <br />
          MY ART
        </div>
        <div class="subtitle">
          INDIVIDUAL CHARM THAT EXPANDS AND NTERCONNECTS FOR LARGER-THAN-ITSELF
          THINK PIECES
        </div>
        <div class="body">
          As a Software Engineer, you hear the “Iterative Approach” all over
          Agile Tech Teams as Project Management jargon, but it holds value for
          a reason. My way of building upon meaningful design takes working
          through a concept over and over, seeing what works and what could be
          improved, and putting these features together into a larger coherent
          system. Each iteration is beautiful and complete, yet gains power in
          its continuous expanse.
        </div>
      </div>
      <div class="sample ft">
        <div class="worktitle">
          PERSONALITY <br />
          & PERSPECTIVE
        </div>
        <div class="subtitle">GAMIFICATION OF THE MUNDANE</div>
        <div class="body">
          A Filipino is a Fun-Loving Maximalist. All it takes is to make the
          most of the simple and mundane.
        </div>
        <div class="subtitle">UTILIZING PERSPECTIVE</div>
        <div class="body">
          By interconnecting spaces, a piece can feel larger or more complex
          than it really is, especially when perspective is involved. This tends
          to be a common theme among my art pieces. I love the vastness of
          things, and play around with concepts that maximise expand visual
          perception.
        </div>
      </div>
      <div class="sample ft">
        <div class="worktitle">HIGHLIGHT:</div>
        <div class="subtitle">AMPLUGGED: LEADERSHIP & LEGACY</div>
        <div class="body">
          This project grew on to be bigger than myself in spite of being at
          risk of discontinuation. I am proud to say all my 4 freshman members
          moved on to becoming officers within the org, with 2 becoming the next
          heads to this project. To add, during my time as Finance head, I was
          able to score a university-funded financial grant for this project,
          highlighting it as an avenue to tackle social struggles through music
          and art that reaches way beyond the university and its inner circles.
          The project continues to thrive today at: fb.com/AMPlugged &
          youtube.com/@AMPlugged
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="jsx">
import { computed } from "vue";
import QuartContent from "@/components/QuartContent.vue";

export default {
  name: "ContentQuarters",
  props: ["nav"],
  setup(props) {
    const navi = computed(() => {
      return props.nav + 1;
    });
    const show = computed(() => {
      return props.nav == 3 ? true : false;
    });
    return {
      navi,
      show,
    };
  },
  components: {
    QuartContent,
  },
};
</script>

<style lang="scss" scoped>
// .main {
//   background-color: $g-black;
// }
.imgr {
  height: 15vh;
}

.imgc {
  width: 15vw;
}

.imgn {
  overflow: visible;
  img {
    height: 30vh;
  }
}

.imgm {
  flex-wrap: wrap;
  img {
    height: 10vw;
  }
}
// .navi {
//   position: sticky; we'll figure this out later
// }

h2 {
  @include ib;
  font-size: 3vh;
  margin: 0;
}

h3 {
  font-family: Neo-black, "Arial", sans-serif;
  margin: 0;
}

p {
  font-family: Neo-light, "Arial-Narrow", sans-serif;
  padding: 0px 2vw;
  width: 100%;
}

.blue {
  background-color: $blueprint;
}
.pink {
  background-color: $polaris;
}
.orange {
  background-color: $solar;
}

.base {
  z-index: -1;
  background-color: $g-black;
}

.sample {
  height: 100vh;
  width: 100%;
}

.worktitle {
  @include ib;
  font-size: 3vw;
  color: $ng-warm;
}

.subtitle {
  @include it;
  font-style: italic;
  color: $punk;
  font-size: 0.8rem;
  width: 50%;
}

.fr {
  justify-content: center;
  gap: 5px;
}

.body {
  font-family: Neo-light, "Arial-Narrow", sans-serif;
  margin: 15px;
  width: 50%;
}

.col2 {
  height: 500vh;
}

.ft {
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: start;
  height: 100%;
}

.row3 {
  padding-top: 5vh;
  padding-bottom: 2vh;
  height: 25vh;
  width: 100%;
  overflow-y: auto;
}

.col3 {
  padding-top: 5vh;
  height: 90vh;
  width: 100%;
}

.r1 {
  border-radius: 15px 100px;
}

.r2 {
  border-radius: 100px 15px;
}

.r3 {
  border-radius: 100px;
}

.r4 {
  border-radius: 100px 100px;
}

.r5 {
  border-radius: 15px 100px 100px;
}

.r6 {
  border-radius: 100px 100px 15px;
}

.amp {
  width: 70%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
