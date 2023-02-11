export const GET_PERSONAL_INFO = `*[_type=="personalInfo"]`
export const GET_SKILLS = `*[_type=="skills"]`
export const GET_EXPERIENCES = `*[_type=="experiences"]`
export const GET_PROJECTS = `*[_type=="projects"]`
export const GET_BLOGS = `*[_type=="blogs"]`
export const GET_BLOG = `*[slug.current == $slug]{
    title,
    metadesc,
    slug,
    blogimage{
      asset->{
        _id,
        url
       }
     },
   content
 }`