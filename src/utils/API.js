import axios from "axios";

const Reddit = {
  getListing: function() {
    const url = 'http://www.reddit.com/r/all/top.json?limit=10&count=0';
    return axios.get(url);
  },
  getMoreListing: function(after, count) {
    const url = 'http://www.reddit.com/r/all/top.json?limit=10&sort=new&after=' + after + '&count=' + count;
    return axios.get(url);
  },
  getPreviousListing: function(before, count) {
    const url = 'http://www.reddit.com/r/all/top.json?limit=10&sort=new&before=' + before + '&count=' + count;
    return axios.get(url);
  },
  getComments: function(ID36){
    const url = 'http://www.reddit.com/r/all/comments/' + ID36 + '.json';
    return axios.get(url);
  }
};

export default Reddit;