import mtsamis from "../avatars/mtsamis.jpg";
import sarahedo from "../avatars/sarahedo.jpg";
import tylermcginnis from "../avatars/tylermcginnis.jpg";
import zoshikanlu from "../avatars/zoshikanlu.jpg";

export function findAvatar(uid) {
    if (uid === "mtsamis")
        return mtsamis;
    else if (uid === "sarahedo")
        return sarahedo;
    else if (uid === "tylermcginnis")
        return tylermcginnis;
    else 
        return zoshikanlu;
}