import { combineReducers } from 'redux';
import personalDetails from './personalDetails';
import projects from './projects';
import { blogs, blog } from './blogs';

export const rootReducer = combineReducers({
    personalDetails: personalDetails,
    projects: projects,
    blogs: blogs,
    blog: blog
});
