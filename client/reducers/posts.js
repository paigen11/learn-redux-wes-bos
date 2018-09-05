// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

// every reducer runs every time there is an action,
// whether something changes in state is up to you (with switch statements)

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;
