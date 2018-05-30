import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

export const addProduct = (payload) =>{
  return { type: ADD_PRODUCT, payload }
}

export const removeProduct = (payload) => {
  return { type: REMOVE_PRODUCT, payload }
}


export const productCount = (ary, classifier) => {
    classifier = classifier || String;
    return ary.reduce(function (counter, item) {
        var p = classifier(item);
        if(counter.hasOwnProperty(p)){
          counter[p]['count'] += 1;
        }else{
          counter[p] = {'count': 1, item}
        }
        return counter;
    }, {})
};
