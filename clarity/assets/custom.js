function expandcollapse (postid) { 
  whichpost = document.getElementById(postid); 
  if (whichpost.className=="postshown") { 
    whichpost.className="posthidden"; 
  } 
  else { 
    whichpost.className="postshown"; 
  } 
} 