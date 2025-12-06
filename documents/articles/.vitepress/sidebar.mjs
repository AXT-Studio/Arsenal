const sidebar = [
    {
        text: 'Introduction', link: '/introduction/', collapsed: false, items: [
            { text: 'Installation', link: '/introduction/installation' },
            { text: 'Q&A', link: '/introduction/q_and_a' },
        ]
    },
    {
        text: 'Entrypoints\' Specs',
        items: [
            {
                text: 'bigint-math', link: '/specs/bigint-math/', collapsed: true, items: [
                    { text: 'class: BigIntMath', link: '/specs/bigint-math/BigIntMath' },
                ]
            },
            {
                text: 'binary-heap', link: '/specs/binary-heap/', collapsed: true, items: [
                    {
                        text: 'class: BinaryHeap', link: '/specs/binary-heap/BinaryHeap/', collapsed: true, items: [
                            { text: 'constructor: new BinaryHeap', link: '/specs/binary-heap/BinaryHeap/_constructor' },
                            { text: 'getter: size', link: '/specs/binary-heap/BinaryHeap/size' },
                            { text: 'method: push', link: '/specs/binary-heap/BinaryHeap/push' },
                            { text: 'method: pop', link: '/specs/binary-heap/BinaryHeap/pop' },
                            { text: 'method: peek', link: '/specs/binary-heap/BinaryHeap/peek' },
                            { text: 'method: remove', link: '/specs/binary-heap/BinaryHeap/remove' },
                            { text: 'method: update', link: '/specs/binary-heap/BinaryHeap/update' },
                            { text: 'method: clear', link: '/specs/binary-heap/BinaryHeap/clear' },
                        ]
                    },
                    {
                        text: 'class: BinaryHeapLite', link: '/specs/binary-heap/BinaryHeapLite/', collapsed: true, items: [
                            { text: 'constructor: new BinaryHeapLite', link: '/specs/binary-heap/BinaryHeapLite/_constructor' },
                            { text: 'getter: size', link: '/specs/binary-heap/BinaryHeapLite/size' },
                            { text: 'method: push', link: '/specs/binary-heap/BinaryHeapLite/push' },
                            { text: 'method: pop', link: '/specs/binary-heap/BinaryHeapLite/pop' },
                            { text: 'method: peek', link: '/specs/binary-heap/BinaryHeapLite/peek' },
                            { text: 'method: clear', link: '/specs/binary-heap/BinaryHeapLite/clear' },
                        ]
                    }
                ]
            },
            {
                text: 'binary-search', link: '/specs/binary-search/', collapsed: true, items: [
                    { text: 'function: binary_search', link: '/specs/binary-search/binary_search' },
                    { text: 'function: lower_bound', link: '/specs/binary-search/lower_bound' },
                    { text: 'function: upper_bound', link: '/specs/binary-search/upper_bound' },
                ]
            },
            {
                text: 'deque', link: '/specs/deque/', collapsed: true, items: [
                    {
                        text: 'class: Deque', link: '/specs/deque/Deque/', collapsed: true, items: [
                            { text: 'constructor: new Deque', link: '/specs/deque/Deque/_constructor' },
                            { text: 'getter: size', link: '/specs/deque/Deque/size' },
                            { text: 'method: unshift', link: '/specs/deque/Deque/unshift' },
                            { text: 'method: push', link: '/specs/deque/Deque/push' },
                            { text: 'method: shift', link: '/specs/deque/Deque/shift' },
                            { text: 'method: pop', link: '/specs/deque/Deque/pop' },
                            { text: 'method: first', link: '/specs/deque/Deque/first' },
                            { text: 'method: last', link: '/specs/deque/Deque/last' },
                            { text: 'method: isEmpty', link: '/specs/deque/Deque/isEmpty' },
                            { text: 'method: toArray', link: '/specs/deque/Deque/toArray' },
                        ]
                    },
                ]
            },
            {
                text: 'disjoint-set', link: '/specs/disjoint-set/', collapsed: true, items: [
                    {
                        text: 'class: DisjointSet', link: '/specs/disjoint-set/DisjointSet/', collapsed: true, items: [
                            { text: 'constructor: new DisjointSet', link: '/specs/disjoint-set/DisjointSet/_constructor' },
                            { text: 'getter: componentCount', link: '/specs/disjoint-set/DisjointSet/componentCount' },
                            { text: 'method: find', link: '/specs/disjoint-set/DisjointSet/find' },
                            { text: 'method: union', link: '/specs/disjoint-set/DisjointSet/union' },
                            { text: 'method: connected', link: '/specs/disjoint-set/DisjointSet/connected' },
                        ]
                    },
                ]
            },
            {
                text: 'ex-math', link: '/specs/ex-math/', collapsed: true, items: [
                    {
                        text: 'class: ExMath', link: '/specs/ex-math/ExMath/', collapsed: true, items: [
                            { text: 'static method: gcd', link: '/specs/ex-math/ExMath/gcd' },
                            { text: 'static method: lcm', link: '/specs/ex-math/ExMath/lcm' },
                            { text: 'static method: getDivisors', link: '/specs/ex-math/ExMath/getDivisors' },
                        ]
                    },
                ]
            },
            {
                text: 'ex-string', link: '/specs/ex-string/', collapsed: true, items: [
                    {
                        text: 'class: ExString', link: '/specs/ex-string/ExString/', collapsed: true, items: [
                            { text: 'static method: runLengthEncode', link: '/specs/ex-string/ExString/runLengthEncode' },
                        ]
                    },
                ]
            },
            {
                text: 'geometry', link: '/specs/geometry/', collapsed: true, items: [
                    {
                        text: 'class: Vector2D', link: '/specs/geometry/Vector2D/', collapsed: true, items: [
                            { text: 'constructor: new Vector2D', link: '/specs/geometry/Vector2D/_constructor' },
                            { text: 'method: add', link: '/specs/geometry/Vector2D/add' },
                            { text: 'method: sub', link: '/specs/geometry/Vector2D/sub' },
                            { text: 'method: dot', link: '/specs/geometry/Vector2D/dot' },
                            { text: 'method: cross', link: '/specs/geometry/Vector2D/cross' },
                            { text: 'property: x', link: '/specs/geometry/Vector2D/x' },
                            { text: 'property: y', link: '/specs/geometry/Vector2D/y' },
                        ]
                    },
                    { text: 'function: CCW', link: '/specs/geometry/CCW' },
                    { text: 'function: isSegmentsIntersect', link: '/specs/geometry/isSegmentsIntersect' },
                ]
            },
            {
                text: 'next-permutation', link: '/specs/next-permutation/', collapsed: true, items: [
                    { text: 'function: next_permutation', link: '/specs/next-permutation/next_permutation' },
                ]
            },
            {
                text: 'segment-tree', link: '/specs/segment-tree/', collapsed: true, items: [
                    {
                        text: 'class: SegmentTree', link: '/specs/segment-tree/SegmentTree/', collapsed: true, items: [
                            { text: 'constructor: new SegmentTree', link: '/specs/segment-tree/SegmentTree/_constructor' },
                            { text: 'getter: size', link: '/specs/segment-tree/SegmentTree/size' },
                            { text: 'method: set', link: '/specs/segment-tree/SegmentTree/set' },
                            { text: 'method: get', link: '/specs/segment-tree/SegmentTree/get' },
                            { text: 'method: query', link: '/specs/segment-tree/SegmentTree/query' },
                            { text: 'method: queryAll', link: '/specs/segment-tree/SegmentTree/queryAll' },
                            { text: 'method: maxRight', link: '/specs/segment-tree/SegmentTree/maxRight' },
                            { text: 'method: minLeft', link: '/specs/segment-tree/SegmentTree/minLeft' },
                        ]
                    }
                ]
            },
            {
                text: 'treap', link: '/specs/treap/', collapsed: true, items: [
                    {
                        text: 'class: Treap', link: '/specs/treap/Treap/', collapsed: true, items: [
                            { text: 'constructor: new Treap', link: '/specs/treap/Treap/_constructor' },
                            { text: 'getter: size', link: '/specs/treap/Treap/size' },
                            { text: 'method: insert', link: '/specs/treap/Treap/insert' },
                            { text: 'method: erase', link: '/specs/treap/Treap/erase' },
                            { text: 'method: get', link: '/specs/treap/Treap/get' },
                            { text: 'method: lowerBound', link: '/specs/treap/Treap/lowerBound' },
                            { text: 'method: upperBound', link: '/specs/treap/Treap/upperBound' },
                            { text: 'method: kthElement', link: '/specs/treap/Treap/kthElement' },
                            { text: 'method: countAllComparisons', link: '/specs/treap/Treap/countAllComparisons' },
                            { text: 'generator method: [Symbol.iterator]', link: '/specs/treap/Treap/Symbol.iterator' },
                        ]
                    }
                ]
            },
            {
                text: 'unique-ids', link: '/specs/unique-ids/', collapsed: true, items: [
                    { text: 'function: getUUIDv7', link: '/specs/unique-ids/getUUIDv7' },
                ]
            },
        ]
    }
];
export { sidebar };
