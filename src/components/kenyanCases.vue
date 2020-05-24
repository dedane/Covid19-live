<template>
<section class='kenyan-cases'>
    <div class='total-cases'>
        <h1>{{cases.total_cases}}</h1>
        <p>total cases</p>
    </div>
    <div class='case-infos'>
        <div class="case-card">
        <h2>{{cases.total_recovered != ''? cases.total_recovered : 0}}</h2>
        <p>Total Recovered</p>
        </div>
    </div>
    <div class='case-card'>
        <h2>{{cases.total_deaths}}</h2>
        <p>Deaths</p>
    </div>
    <div class="case-card">
        <h2>{{ cases.new_cases != ''? cases.new_cases : 0}}</h2>
        <p>New Cases</P>
    </div>
</section>
</template>
<script>
    export default{
        props: {
        cases: {
            required: true
        }
      }
    }
</script>