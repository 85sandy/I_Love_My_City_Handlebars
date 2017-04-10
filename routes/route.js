exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city have something to say'
                    });
                  }


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,headline;
    var imageArray=[1,2,3,4];

    if(cityName==='bangalore'){
       title="Bangalore";
       headline="Bangalore: Garden City and The Silicon Valley of India";
    }
    else if(cityName==='chikmagalur'){
       title="Chikmagalur";
       headline="Chikmagalur: Coffee plantations, pleasant climate, hill stations";
    }
    else if(cityName==='hassan'){
       title="Hassan";
       headline="Hassan: Beautiful architecture";
    }
    else if(cityName==='mysore'){
       title="Mysore";
       headline="Mysore:  royal heritage, magnificent monuments and buildings";
    }
    else if(cityName==='shimoga'){
       title="Shimoga";
       headline="Shimoga: Sanskrit, Poetry, Western Ghats";
       imageArray.push(5);
       imageArray.push(6);
    }

    res.render('city',{
      title:title,
      headline:headline,
      city:cityName,
      imageArray:imageArray});
  }
