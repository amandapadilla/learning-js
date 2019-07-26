"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "";

const userAvatarImg = document.querySelector(".user__avatar");

userAvatarImg.src = userAvatar || DEFAULT_AVATAR;
