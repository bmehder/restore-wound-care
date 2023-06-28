<script>
  import Qualified from './Qualified.svelte'
  import CTA from '$lib/CTA.svelte'
  import Download from '$lib/icons/Download.svelte'
</script>

<svelte:head>
  <title>Referring Providers - Restore Wound Care</title>
  <meta
    name="description"
    content="If you are a wound care provider with a patient who has not responded to the treatment you have provided so far, please consider us as a resource for healing."
  />
</svelte:head>

<h1 class="title">Referring Providers</h1>

<section class="flow">
  <h2>A Resource For Healing</h2>
  <img
    class="float-right"
    style="--max: 31em"
    src="/providers.jpg"
    alt="Doctor smiling with staff in background"
  />
  <p>
    Whether you have a patient that needs a wound care referral or if you are a current
    wound care provider who has a patient who has not responded to the treatment you have
    provided so far, please consider us as a resource for healing.
  </p>

  <p>
    Your patients look to you as their contact for help across the board. Consider us as a
    resource that you can confidently recommend to deal with chronic wounds. We are not
    looking to replace the care you provide but to augment your service for more stubborn
    situations. We will work under your guidance if you would like to take the lead or you
    can turn the very specific work we do over to us completely, knowing that we will keep
    you informed every step along the way.
  </p>

  <p>
    We always provide an evaluation up front to make sure the patient is a good candidate
    for the Restore process. We also make sure insurance is pre-authorized so there are no
    surprises. For those that qualify, we have found that the process is not long and
    drawn out but provides healing at around 21 days or within several months. Every
    patient is different of course. Once the major part of our work is done your patient
    is yours again for follow up and to continue under your care.
  </p>

  <p>
    We are actively looking for partners to help us with patients who have struggled in
    the past.
  </p>
</section>

<CTA>
  <p class="h1 underline">Patient Referral Form</p>
  <p class="balance">
    Call our office at (720) 678-9868 with questions or for additional information.
  </p>
  <a class="button" href="/referral-form_v3-restore-wound-care.docx">Download Form <Download /></a>
</CTA>

<section class="flow">
  <h2>Identifying Patients</h2>

  <div class="flex">
    <div class="flow">
      <p>
        When evaluating patients for this protocol please consider the following before
        recommending care.
      </p>
      <h3>Qualified patients have a wound that...</h3>
      <Qualified />
    </div>
    <div class="flow">
      <p>
        When evaluating patient referrals, please consider the following
        contraindications:
      </p>
      <ul class="list">
        <li>infected wound,</li>
        <li>active cancer treatment,</li>
        <li>and/or immunosuppressive treatment.</li>
      </ul>
      <h3>Pre-Assessment</h3>
      <p>
        Restore Medical will conduct assessment and amnio products preauthorization on all
        patients prior to treatment to ensure the protocol is applicable and insurance is
        confirmed for the treatment.
      </p>
      <h3>Flexible Mobile Service</h3>
      <p>
        No need to drive, we will come to you! Our flexible mobile service is available if
        transportation and mobility is a problem. We bill your insurance for the visit, so
        there is no cash fee involved. Additionally, we have <a href="/contact"
          >multiple clinic locations</a
        > available for evaluations and treatments if you'd prefer.
      </p>
    </div>
  </div>
</section>
