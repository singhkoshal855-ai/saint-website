// Replace this placeholder with Saint's real Discord installation URL after deployment.
const INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1553785807343591595";

["inviteBtn","inviteHero","inviteCta"].forEach(id=>{
  const el=document.getElementById(id);
  if(!el)return;
  el.href=INVITE_URL;
  el.addEventListener("click",e=>{
    if(INVITE_URL==="#"){
      e.preventDefault();
      alert("Saint's Discord installation link will be connected here.");
    }
  });
});
