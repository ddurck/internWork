//initial state
const state = () => ({
  stepsNum: 1,
  currentSteps: "Basic Information",
  finishedCount: 0,
  basic_information: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    province: "",
    city: "",
    activeName:''
  },
  work_experience: [
    {
      companyName: "",
      jobTitle: "",
      startMonth: "",
      startYrear: "",
      endMonth: "",
      endYear: "",
      Responsibilities: ""
    }
  ]
});
//getters
const getters = {};

//actions
const actions = {};
//mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
