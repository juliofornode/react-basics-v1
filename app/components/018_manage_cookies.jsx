//from project todo-with-cookies by David Katz
//he uses the JS library SFCOOKIES
//download it via npm

//we create a cookie using bake_cookie('cookieName', load)
//we read a cookie using reac_cookie('cookieName')

// import {bake_cookie, read_cookie} from 'sfcookies';
//
// export default (state=[], action) => {
//   state = read_cookie('tasksCookie');
//   switch(action.type) {
//   case 'SAVE_TASK':
//     bake_cookie('tasksCookie', [...state, action.newTask]);
//     return [...state, action.newTask];
//   case 'LOAD_TASKS':
//     return [...state, ...action.tasks];
//   case 'DELETE_TASK':
//     return state.filter( task => {
//       return (task !== action.task);
//     });
//   default:
//     return state;
//   }
// };
