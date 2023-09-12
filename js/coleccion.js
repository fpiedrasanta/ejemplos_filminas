class Collection {
    constructor(array) {
        this.array = array;
    }

    insert(element) {
        this.array.push(element);
    }

    deleteByCriteria(fn) {
        const array = [];
        for(let element of this.array) {
            if(!fn(element)) {
                array.push(element);
            }
        }

        return array;
    }

    findByCriteria(fn) {
        const array = [];
        for(let element of this.array) {
            if(fn(element)) {
                array.push(element);
            }
        }

        return array;
    }

    findOne(fn) {
        for(let element of this.array) {
            if(fn(element)) return element;
        }

        return null;
    }

    reduce(fnAccumulate, initValue) {
        let acc = initValue;
        for(let element of this.array) {
            acc = fnAccumulate(acc, element);
        }

        return acc;
    }

    sort(fn) {
        const copiaArray =  [...this.array];
        for (let i = 0; i < copiaArray.length - 1; i++) {
            for (let j = 0; j < copiaArray.length - 1 - i; j++) {
                if (fn(copiaArray[j], copiaArray[j + 1]) > 0) {
                    const temp = copiaArray[j];
                    copiaArray[j] = copiaArray[j + 1];
                    copiaArray[j + 1] = temp;
                }
            }
        }
        return copiaArray;
    }
}
