export default function(article = [], action) {
  
    if(action.type == 'addArticle') {
      //console.log('Bonjour' , action.Newarticle)
      var SelectedArticle = [...article];
      SelectedArticle.push(action.Newarticle)
      //console.log('Envoi' , SelectedArticle)

      return SelectedArticle;
    } else if (action.type == 'deleteArticle') {
      console.log('Bonjour' , action.Newarticle.title)
      //console.log('hello', article)
      var SelectedArticle = [...article];
      for(var i = 0; i < SelectedArticle.length; i++) {
        if(SelectedArticle[i].title === action.Newarticle.title ) {
          SelectedArticle.splice(i, 1);
        }
      }
      console.log('Envoi' , SelectedArticle)

      return SelectedArticle;
    } else {
      return article;
    }
  }
  