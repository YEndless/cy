const _URL="http://localhost:8080";

module.exports= {

  //article
  getArticle: _URL+'/article',
  getArticledetail: _URL+'/article/all',
  // getArticledetail: _URL+'/getArtDetail',
  // getHotArtList: _URL+'/getHotArtList',
  // getArticleDate: _URL+'/getArticleDate',
  // getArticleListByDate: _URL+'/getArticleListByDate',

  //tag
  getTags :  _URL+'/getTags',

  //user
  getUserInfo: _URL + "/getUserInfo",
};
