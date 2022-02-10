flavor
<a href="https://imgbb.com/"><img src="https://i.ibb.co/FYFM3TL/Savory.png" alt="Savory" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/GVTG5zK/Fruity.png" alt="Fruity" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/kqsyvdm/TOASTED.png" alt="TOASTED" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/KF3wKYr/CARAMELIZED.png" alt="CARAMELIZED" border="0"></a>

sensation
<a href="https://imgbb.com/"><img src="https://i.ibb.co/8MM9RNf/CRISP.png" alt="CRISP" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/R3F2g12/SMOOTH.png" alt="SMOOTH" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/cN3Txk3/Rich.png" alt="Rich" border="0"></a>

Intense
<a href="https://imgbb.com/"><img src="https://i.ibb.co/qpf5mFy/Subtle-soft.png" alt="Subtle-soft" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/prKBdTt/Med-Bal.png" alt="Med-Bal" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/mz539LF/Intense-Robust.png" alt="Intense-Robust" border="0"></a>
db.collection('coffee').find({"category_id":categoryID},{"_id.$":0,"name.$":1,"description.$":0}).toArray((err,result)=>{
    if(err) console.log(err)
    res.send(result);
})
})