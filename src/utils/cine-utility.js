function getImage(name){
        //  console.log(new URL(`../assets/img/${name}`));
         return new URL(`../assets/img/${name}`,import.meta.url).href;
}

export {getImage};