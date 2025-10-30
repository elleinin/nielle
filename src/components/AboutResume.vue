<template>
  <div class="fc">
    <div class="title" :class="props.bg">{{ props.title }}</div>
    <div class="body">
      <h3>
        2016 - 2021: B.S. Management Information Systems <br />
        @ Ateneo de Manila University
      </h3>
      <p>
        Studies focusing on Project Management and Data Systems.<br />Graduated
        with a Specialization in Interactive Multimedia.
      </p>
      <p>
        TAKEAWAY: Community involvement and a passion for Interaction Design
      </p>
      <h3>
        2021 - 2024: Software Engineer <br />
        @ Maya Philippines, Inc.
      </h3>
      <p>
        Hired as a trainee, continued to lead software development initiatives,
        spearhead the creation of a biller dashboard, and support various
        enhancements to the Maya Mobile Wallet.
      </p>
      <p>IMPACT: Increase in onboarded Billers, Launch of Maya Credit</p>
      <h3>
        2024 - 2025: Data Analytics & Full Stack Development <br />
        @ Pfizer
      </h3>
      <p>
        In charge of the development and maintenance of various Analytics
        Dashboards (web apps, Power BI, Spotfire BI, etc.), as well as the
        Development of Software Solutions that support Global Clinical Supply
        Operations.
      </p>
      <p>
        IMPACT: Solutions creation, enhanced app performance, and improved
        technical documentation
      </p>
    </div>
    <div class="subtitle">{{ props.sub }}</div>
  </div>
</template>

<script>
export default {
  name: "AboutResume",
  props: ["title", "body", "sub", "bg"],
  setup(props) {
    return { props };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: $punk;
  margin: 0px;
  margin-top: 10px;
}
p {
  color: $galaxy;
  margin: 3px;
}

.subtitle {
  @include ib;
  font-size: 3vh;
  margin-top: 20px;
}
.title {
  @include ib;
  font-size: 7vh;
  margin-top: -50px;
  color: $bluer;
  &.blue {
    color: $punk;
  }
}

.body {
  width: 55vh;
  text-align: justify;
  margin-bottom: 12px;
  line-height: 150%;
  padding: 20px;
  z-index: 10;
  border-radius: 5%;
  color: $galaxy;
}

@media only screen and (max-width: 768px) {
  .body {
    width: 69vw;
    padding: 0;
    font-family: Neo-Light, sans-serif;
    color: $galaxy;
  }
  .title {
    font-size: 10vw;
  }
  .subtitle {
    font-size: 5vw;
  }
}
</style>
