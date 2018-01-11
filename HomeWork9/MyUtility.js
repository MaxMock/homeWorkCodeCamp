let _ = require('lodash');

class MyUtility
{
    assign(object,sources)
    {
      return _.assign(object,sources);
    }
    times(number,iteratee)
    {
     return _.times(number,iteratee)
    }
    Keyby(collection,iteratee)
    {
      return _.keyBy(collection,iteratee)
    }
    cloneDeep(value)
    {
      return _.cloneDeep(value)
    }
    filter(collection,identity)
    {
      return  _.filter(collection,identity) 
    }
    
    sortBy(collection,identity)
    {
      return _.sortBy(collection,identity);
    }
}
exports.MyUtility =MyUtility;