import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Resume from '@/views/Resume'
import Info from '@/views/Info'
import BasicInformation from '@/components/BasicInformation'
import WorkExperience from '@/components/WorkExperience'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import AdditionalSkills from '@/components/AdditionalSkills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/info',
      name: 'Info',
      component: Info,
      children:[
        {
          path:'basic_information',
          component: BasicInformation
        },
        {
          path:'work_experience',
          component: WorkExperience
        },
        {
          path:'education',
          component: Education
        },
        {
          path:'certifications',
          component: Certifications
        },
        {
          path:'additional_skills',
          component: AdditionalSkills
        },

      ]
    }
  ]
})
