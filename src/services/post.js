import axiosConfig from "../axiosConfig";

export const apiGetPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: "/rental-home/posts",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsLimit = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/rental-home/posts`,
        params: query,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetNewPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = axiosConfig({
        method: "GET",
        url: "/rental-home/posts/new-posts",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

// export const apiCloudUploadImages = (images) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await axios({
//         method: "POST",
//         url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload/`,
//         data: images
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });

export const apiUploadImages = (images, postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = axiosConfig({
        method: "POST",
        url: `/rental-home/posts/image/${postId}`,
        data: images,
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiCreatePost = (formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: `/rental-home/posts/create-post`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostsOfUser = (query, token) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: `/rental-home/posts/getPostsOfUser`,
        data: token,
        params: query,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiUpdatePost = (postId, formData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "PUT",
        url: `/rental-home/posts/${postId}`,
        data: formData,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiDeleteImage = (imageUrl) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/rental-home/posts/delete-img",
        data: imageUrl,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiDeletePost = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "DELETE",
        url: `/rental-home/posts/${postId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetPostById = (postId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "GET",
        url: `/rental-home/posts/get-post/${postId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
