

/* ═══════════════════════════════════════════
   Translations
═══════════════════════════════════════════ */
const TRANSLATIONS = {
    ar: {
        home:'الرئيسية', sorting:'الترتيب', trees:'الأشجار',
        heroBadge:'منصة تعليمية تفاعلية',
        heroTitle:'تصور الخوارزميات<br>بشكل احترافي',
        heroSubtitle:'استكشف وفهم الخوارزميات وهياكل البيانات من خلال تصورات تفاعلية خطوة بخطوة',
        startExploring:'ابدأ الاستكشاف', exploreTrees:'استكشف الأشجار',
        algorithms:'خوارزميات', dataStructures:'هياكل بيانات', interactions:'تفاعلات',
        features:'المميزات', featuresDesc:'أدوات متقدمة لفهم الخوارزميات',
        realTimeViz:'تصور فوري', realTimeVizDesc:'شاهد الخوارزميات تعمل في الوقت الحقيقي مع تحكم كامل',
        stepByStep:'خطوة بخطوة', stepByStepDesc:'تعلم كل خطوة مع شرح مفصل والكود المرجعي',
        multiLang:'دعم متعدد اللغات', multiLangDesc:'واجهة بالعربية والإنجليزية مع دعم كامل للاتجاهين',
        responsive:'تصميم متجاوب', responsiveDesc:'يعمل بشكل مثالي على جميع الأجهزة والشاشات',
        availableAlgos:'الخوارزميات المتاحة', availableAlgosDesc:'اختر الخوارزمية التي تريد استكشافها',
        sortingAlgorithms:'خوارزميات الترتيب', treeStructures:'هياكل البيانات الشجرية',
        inputData:'إدخال البيانات', inputPlaceholder:'أرقام مفصولة بفاصلة',
        arraySize:'حجم المصفوفة', generate:'توليد عشوائي',
        startVisualization:'بدء التصور', arrayVisualization:'تصور المصفوفة',
        enterDataToStart:'أدخل البيانات للبدء', pseudoCode:'الكود المرجعي',
        currentStepInfo:'الخطوة الحالية', clickStartToSee:'اضغط "بدء التصور" لرؤية الخوارزمية',
        statistics:'الإحصائيات', comparisons:'مقارنات', swaps:'تبديلات', steps:'خطوات',
        treeOperations:'عمليات الشجرة',
        insertValue:'إدراج قيمة', insert:'إدراج',
        searchValue:'بحث عن قيمة', search:'بحث',
        deleteValue:'حذف قيمة', delete:'حذف',
        clearTree:'مسح الشجرة', treeVisualization:'تصور الشجرة',
        insertToBuild:'أدخل قيمًا لبناء الشجرة',
        treeStats:'إحصائيات الشجرة', nodes:'عقد', depth:'العمق',
        performOperation:'نفّذ عملية لرؤية الشرح',
        best:'الأفضل', avg:'المتوسط', worst:'الأسوأ', space:'المكان',
        default:'افتراضي', comparing:'مقارنة', swapping:'تبديل',
        sorted:'مرتب', pivot:'محور', partition:'تقسيم', merging:'دمج',
        inserting:'إدراج', searching:'بحث', deleting:'حذف',
        normalNode:'عقدة', currentNode:'الحالية', successNode:'نجاح', deleteNode:'حذف',
        bubbleSort:'الترتيب الفقاعي', selectionSort:'ترتيب الاختيار',
        insertionSort:'ترتيب الإدراج', quickSort:'الترتيب السريع', mergeSort:'ترتيب الدمج',
        'bst-insert':'إدراج BST', 'bst-search':'بحث BST', 'bst-delete':'حذف BST',
        // descriptions
        bubbleSortDesc:'يقارن العناصر المتجاورة ويبدلها حتى الترتيب الكامل',
        selectionSortDesc:'يبحث عن أصغر عنصر ويضعه في موقعه الصحيح',
        insertionSortDesc:'يدرج كل عنصر في موقعه الصحيح في الجزء المرتب',
        quickSortDesc:'يقسم المصفوفة حول محور ويرتب كل قسم بشكل متكرر',
        mergeSortDesc:'يقسم إلى نصفين ويرتب ثم يدمج النتائج',
        'bst-insertDesc':'إدراج قيمة جديدة مع الحفاظ على ترتيب BST',
        'bst-searchDesc':'البحث عن قيمة باستخدام مقارنات BST اللوغاريتمية',
        'bst-deleteDesc':'حذف عقدة مع إعادة هيكلة الشجرة بشكل صحيح',
        // errors / messages
        errEnterData:'يرجى إدخال بيانات صحيحة (أرقام مفصولة بفاصلة)',
        errMinElements:'يرجى إدخال عنصرين على الأقل',
        errEnterNumber:'يرجى إدخال رقم صحيح',
        generated:'تم توليد مصفوفة عشوائية بنجاح',
        langChanged:'تم تغيير اللغة', treeCleared:'تم مسح الشجرة',
        pathLabel:'المسار:'
    },
    en: {
        home:'Home', sorting:'Sorting', trees:'Trees',
        heroBadge:'Interactive Learning Platform',
        heroTitle:'Visualize Algorithms<br>Professionally',
        heroSubtitle:'Explore and understand algorithms and data structures through interactive step-by-step visualizations',
        startExploring:'Start Exploring', exploreTrees:'Explore Trees',
        algorithms:'Algorithms', dataStructures:'Data Structures', interactions:'Interactions',
        features:'Features', featuresDesc:'Advanced tools for understanding algorithms',
        realTimeViz:'Real-time Visualization', realTimeVizDesc:'Watch algorithms run in real-time with full control',
        stepByStep:'Step by Step', stepByStepDesc:'Learn each step with detailed explanations and reference code',
        multiLang:'Multi-language Support', multiLangDesc:'Interface in Arabic and English with full RTL support',
        responsive:'Responsive Design', responsiveDesc:'Works perfectly on all devices and screens',
        availableAlgos:'Available Algorithms', availableAlgosDesc:'Choose the algorithm you want to explore',
        sortingAlgorithms:'Sorting Algorithms', treeStructures:'Tree Data Structures',
        inputData:'Input Data', inputPlaceholder:'Comma-separated numbers',
        arraySize:'Array Size', generate:'Generate Random',
        startVisualization:'Start Visualization', arrayVisualization:'Array Visualization',
        enterDataToStart:'Enter data to start', pseudoCode:'Reference Code',
        currentStepInfo:'Current Step', clickStartToSee:'Click "Start Visualization" to see the algorithm',
        statistics:'Statistics', comparisons:'Comparisons', swaps:'Swaps', steps:'Steps',
        treeOperations:'Tree Operations',
        insertValue:'Insert Value', insert:'Insert',
        searchValue:'Search Value', search:'Search',
        deleteValue:'Delete Value', delete:'Delete',
        clearTree:'Clear Tree', treeVisualization:'Tree Visualization',
        insertToBuild:'Insert values to build the tree',
        treeStats:'Tree Statistics', nodes:'Nodes', depth:'Depth',
        performOperation:'Perform an operation to see explanation',
        best:'Best', avg:'Avg', worst:'Worst', space:'Space',
        default:'Default', comparing:'Comparing', swapping:'Swapping',
        sorted:'Sorted', pivot:'Pivot', partition:'Partition', merging:'Merging',
        inserting:'Inserting', searching:'Searching', deleting:'Deleting',
        normalNode:'Normal', currentNode:'Current', successNode:'Found', deleteNode:'Delete',
        bubbleSort:'Bubble Sort', selectionSort:'Selection Sort',
        insertionSort:'Insertion Sort', quickSort:'Quick Sort', mergeSort:'Merge Sort',
        'bst-insert':'BST Insert', 'bst-search':'BST Search', 'bst-delete':'BST Delete',
        bubbleSortDesc:'Repeatedly compares adjacent elements and swaps if out of order',
        selectionSortDesc:'Finds the minimum element and places it in the correct position',
        insertionSortDesc:'Builds sorted array by inserting each element into its correct position',
        quickSortDesc:'Partitions array around a pivot and recursively sorts each part',
        mergeSortDesc:'Splits into halves, sorts each, then merges the sorted results',
        'bst-insertDesc':'Insert a new value while maintaining BST ordering property',
        'bst-searchDesc':'Search for a value using O(log n) BST comparisons',
        'bst-deleteDesc':'Remove a node while correctly restructuring the tree',
        errEnterData:'Please enter valid data (comma-separated numbers)',
        errMinElements:'Please enter at least 2 elements',
        errEnterNumber:'Please enter a valid number',
        generated:'Random array generated successfully',
        langChanged:'Language changed', treeCleared:'Tree cleared',
        pathLabel:'Path:'
    }
};

/* ═══════════════════════════════════════════
   Algorithm Definitions
═══════════════════════════════════════════ */
const SORT_TITLE_MAP = {
    bubble: 'Bubble Sort',
    selection: 'Selection Sort',
    insertion: 'Insertion Sort',
    quick: 'Quick Sort',
    merge: 'Merge Sort'
};

const ALGORITHMS = {
    sorting: [
        {
            id:'bubble', icon:'🫧',
            timeBest:'O(n)', timeAvg:'O(n²)', timeWorst:'O(n²)', space:'O(1)',
            pseudoCode:[
                'function bubbleSort(arr):',
                '  n = arr.length',
                '  for i = 0 to n-1:',
                '    swapped = false',
                '    for j = 0 to n-i-2:',
                '      if arr[j] > arr[j+1]:',
                '        swap(arr[j], arr[j+1])',
                '        swapped = true',
                '    if !swapped: break',
                '  return arr'
            ]
        },
        {
            id:'selection', icon:'👆',
            timeBest:'O(n²)', timeAvg:'O(n²)', timeWorst:'O(n²)', space:'O(1)',
            pseudoCode:[
                'function selectionSort(arr):',
                '  n = arr.length',
                '  for i = 0 to n-1:',
                '    minIdx = i',
                '    for j = i+1 to n-1:',
                '      if arr[j] < arr[minIdx]:',
                '        minIdx = j',
                '    swap(arr[i], arr[minIdx])',
                '  return arr'
            ]
        },
        {
            id:'insertion', icon:'📥',
            timeBest:'O(n)', timeAvg:'O(n²)', timeWorst:'O(n²)', space:'O(1)',
            pseudoCode:[
                'function insertionSort(arr):',
                '  n = arr.length',
                '  for i = 1 to n-1:',
                '    key = arr[i]',
                '    j = i - 1',
                '    while j >= 0 and arr[j] > key:',
                '      arr[j+1] = arr[j]',
                '      j = j - 1',
                '    arr[j+1] = key',
                '  return arr'
            ]
        },
        {
            id:'quick', icon:'⚡',
            timeBest:'O(n log n)', timeAvg:'O(n log n)', timeWorst:'O(n²)', space:'O(log n)',
            pseudoCode:[
                'function quickSort(arr, low, high):',
                '  if low < high:',
                '    pi = partition(arr, low, high)',
                '    quickSort(arr, low, pi-1)',
                '    quickSort(arr, pi+1, high)',
                '',
                'function partition(arr, low, high):',
                '  pivot = arr[high]',
                '  i = low - 1',
                '  for j = low to high-1:',
                '    if arr[j] <= pivot:',
                '      i++, swap(arr[i], arr[j])',
                '  swap(arr[i+1], arr[high])',
                '  return i + 1'
            ]
        },
        {
            id:'merge', icon:'🔀',
            timeBest:'O(n log n)', timeAvg:'O(n log n)', timeWorst:'O(n log n)', space:'O(n)',
            pseudoCode:[
                'function mergeSort(arr):',
                '  if arr.length <= 1: return arr',
                '  mid = arr.length / 2',
                '  left = mergeSort(arr[0:mid])',
                '  right = mergeSort(arr[mid:end])',
                '  return merge(left, right)',
                '',
                'function merge(left, right):',
                '  result = []',
                '  while left and right not empty:',
                '    if left[0] <= right[0]:',
                '      result.append(left.pop(0))',
                '    else: result.append(right.pop(0))',
                '  return result + left + right'
            ]
        }
    ],
    tree: [
        {
            id:'bst-insert', icon:'➕',
            timeBest:'O(log n)', timeAvg:'O(log n)', timeWorst:'O(n)', space:'O(1)',
            pseudoCode:[
                'function insert(node, value):',
                '  if node is null:',
                '    return new Node(value)',
                '  if value < node.value:',
                '    node.left = insert(node.left, value)',
                '  else if value > node.value:',
                '    node.right = insert(node.right, value)',
                '  return node'
            ]
        },
        {
            id:'bst-search', icon:'🔍',
            timeBest:'O(1)', timeAvg:'O(log n)', timeWorst:'O(n)', space:'O(1)',
            pseudoCode:[
                'function search(node, value):',
                '  if node is null:',
                '    return NOT_FOUND',
                '  if value == node.value:',
                '    return FOUND',
                '  if value < node.value:',
                '    return search(node.left, value)',
                '  return search(node.right, value)'
            ]
        },
        {
            id:'bst-delete', icon:'🗑️',
            timeBest:'O(log n)', timeAvg:'O(log n)', timeWorst:'O(n)', space:'O(1)',
            pseudoCode:[
                'function deleteNode(node, value):',
                '  if node is null: return null',
                '  if value < node.value:',
                '    node.left = deleteNode(node.left, value)',
                '  else if value > node.value:',
                '    node.right = deleteNode(node.right, value)',
                '  else:',
                '    if node.left is null: return node.right',
                '    if node.right is null: return node.left',
                '    successor = minValue(node.right)',
                '    node.value = successor.value',
                '    node.right = deleteNode(node.right, successor.value)',
                '  return node'
            ]
        }
    ]
};

/* ═══════════════════════════════════════════
   Particle System  (BUG FIX: proper cleanup + perf)
═══════════════════════════════════════════ */
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext('2d');
        this.particles = [];
        this.mouse  = { x: -1000, y: -1000 };
        this.rafId  = null;

        this._resizeHandler    = () => this.resize();
        this._mouseMoveHandler = (e) => { this.mouse.x = e.clientX; this.mouse.y = e.clientY; };
        this._visChangeHandler = () => { if (!document.hidden && !this.rafId) this._tick(); };

        window.addEventListener('resize',      this._resizeHandler,    { passive: true });
        window.addEventListener('mousemove',   this._mouseMoveHandler, { passive: true });
        document.addEventListener('visibilitychange', this._visChangeHandler);

        this.resize();
        this.init();
        this._tick();
    }

    resize() {
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        const count = Math.min(80, Math.floor(this.canvas.width * this.canvas.height / 20000));
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x:  Math.random() * this.canvas.width,
                y:  Math.random() * this.canvas.height,
                vx: (Math.random() - .5) * .5,
                vy: (Math.random() - .5) * .5,
                r:  Math.random() * 2 + 1,
                o:  Math.random() * .5 + .2
            });
        }
    }

    _tick() {
        if (document.hidden) { this.rafId = null; return; }
        this.rafId = requestAnimationFrame(() => this._tick());
        const { ctx, canvas, particles, mouse } = this;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            const p  = particles[i];
            const dx = mouse.x - p.x, dy = mouse.y - p.y;
            const d  = Math.hypot(dx, dy);
            if (d < 150 && d > 0) {
                const f = (150 - d) / 150 * .02;
                p.vx -= dx / d * f;
                p.vy -= dy / d * f;
            }
            p.x += p.vx;  p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height)  p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,102,255,${p.o})`;
            ctx.fill();
        }

        // BUG FIX: use index loop — avoids Array.slice() allocations each frame
        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x, dy = p1.y - p2.y;
                const d  = Math.hypot(dx, dy);
                if (d < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0,102,255,${.15 * (1 - d / 120)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
    }

    destroy() {
        if (this.rafId) { cancelAnimationFrame(this.rafId); this.rafId = null; }
        window.removeEventListener('resize',      this._resizeHandler);
        window.removeEventListener('mousemove',   this._mouseMoveHandler);
        document.removeEventListener('visibilitychange', this._visChangeHandler);
    }
}

/* ═══════════════════════════════════════════
   Toast  (BUG FIX: limit concurrent toasts)
═══════════════════════════════════════════ */
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    // Limit to 3 concurrent toasts
    while (container.children.length >= 3) container.removeChild(container.firstChild);

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    const hide = () => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        setTimeout(() => toast.remove(), 300);
    };
    setTimeout(hide, 3000);
    toast.addEventListener('click', hide);
}

/* ═══════════════════════════════════════════
   State Manager  (BUG FIX: Set serialization)
═══════════════════════════════════════════ */
class StateManager {
    constructor() { this.states = []; this.index = -1; }

    reset() { this.states = []; this.index = -1; }

    // BUG FIX: JSON.stringify converts Set → {} losing all data.
    // Solution: use a custom replacer/reviver to preserve Sets as plain arrays.
    addState(state) {
        const clone = JSON.parse(
            JSON.stringify(state, (_k, v) => v instanceof Set ? { __set: true, v: [...v] } : v),
            (_k, v) => (v && v.__set) ? new Set(v.v) : v
        );
        this.states.push(clone);
    }

    next()  { return this.index < this.states.length - 1 ? this.states[++this.index] : null; }
    prev()  { return this.index > 0 ? this.states[--this.index] : null; }
    get total()   { return this.states.length; }
    get current() { return this.states[this.index]; }
    get hasNext() { return this.index < this.states.length - 1; }
    get hasPrev() { return this.index > 0; }
}

/* ═══════════════════════════════════════════
   Sorting Engines
═══════════════════════════════════════════ */
class SortingEngine {
    static _state(array, sorted, comparing, swapping, extras, action, line, explanation, comparisons, swaps) {
        return { array: [...array], sorted: new Set([...sorted]), comparing: comparing || [], swapping: swapping || [], ...extras, action, line, explanation, comparisons, swaps };
    }

    static bubble(arr, lang) {
        const states = [], a = [...arr], n = a.length;
        let comparisons = 0, swaps = 0;
        const sorted = new Set();
        const ar = lang === 'ar';

        states.push(this._state(a, sorted, [], [], {}, 'initial', 0, ar ? 'الحالة الابتدائية' : 'Initial state', 0, 0));

        for (let i = 0; i < n - 1; i++) {
            let swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                comparisons++;
                states.push(this._state(a, sorted, [j, j+1], [], {}, 'compare', 5,
                    ar ? `مقارنة ${a[j]} مع ${a[j+1]}` : `Comparing ${a[j]} with ${a[j+1]}`, comparisons, swaps));
                if (a[j] > a[j+1]) {
                    [a[j], a[j+1]] = [a[j+1], a[j]]; swaps++; swapped = true;
                    states.push(this._state(a, sorted, [], [j, j+1], {}, 'swap', 6,
                        ar ? `تبديل ${a[j+1]} ↔ ${a[j]}` : `Swapping ${a[j+1]} ↔ ${a[j]}`, comparisons, swaps));
                }
            }
            sorted.add(n - 1 - i);
            if (!swapped) break;
        }
        for (let i = 0; i < n; i++) sorted.add(i);
        states.push(this._state(a, sorted, [], [], {}, 'complete', 9, ar ? '✅ تم الترتيب!' : '✅ Sorted!', comparisons, swaps));
        return states;
    }

    static selection(arr, lang) {
        const states = [], a = [...arr], n = a.length;
        let comparisons = 0, swaps = 0;
        const sorted = new Set();
        const ar = lang === 'ar';

        states.push(this._state(a, sorted, [], [], { minMarker:[] }, 'initial', 0, ar ? 'الحالة الابتدائية' : 'Initial state', 0, 0));

        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            states.push(this._state(a, sorted, [], [], { minMarker:[minIdx], current:[i] }, 'initial', 3,
                ar ? `البحث عن الأصغر من الموضع ${i}` : `Finding minimum from position ${i}`, comparisons, swaps));
            for (let j = i + 1; j < n; j++) {
                comparisons++;
                states.push(this._state(a, sorted, [j, minIdx], [], { minMarker:[minIdx] }, 'compare', 5,
                    ar ? `مقارنة ${a[j]} مع ${a[minIdx]}` : `Comparing ${a[j]} with ${a[minIdx]}`, comparisons, swaps));
                if (a[j] < a[minIdx]) {
                    minIdx = j;
                    states.push(this._state(a, sorted, [], [], { minMarker:[minIdx] }, 'initial', 6,
                        ar ? `تحديث الأصغر: ${a[minIdx]}` : `New minimum: ${a[minIdx]}`, comparisons, swaps));
                }
            }
            if (minIdx !== i) {
                [a[i], a[minIdx]] = [a[minIdx], a[i]]; swaps++;
                states.push(this._state(a, sorted, [], [i, minIdx], { minMarker:[] }, 'swap', 7,
                    ar ? `تبديل الموضعين ${i} ↔ ${minIdx}` : `Swapping positions ${i} ↔ ${minIdx}`, comparisons, swaps));
            }
            sorted.add(i);
        }
        sorted.add(n - 1);
        states.push(this._state(a, sorted, [], [], { minMarker:[] }, 'complete', 8, ar ? '✅ تم الترتيب!' : '✅ Sorted!', comparisons, swaps));
        return states;
    }

    static insertion(arr, lang) {
        const states = [], a = [...arr], n = a.length;
        let comparisons = 0, swaps = 0;
        const sorted = new Set([0]);
        const ar = lang === 'ar';

        states.push(this._state(a, sorted, [], [], {}, 'initial', 0, ar ? 'الحالة الابتدائية' : 'Initial state', 0, 0));

        for (let i = 1; i < n; i++) {
            const key = a[i];
            let j = i - 1;
            states.push(this._state(a, sorted, [], [], { current:[i] }, 'initial', 3,
                ar ? `اختيار العنصر ${key} للإدراج` : `Selecting element ${key} for insertion`, comparisons, swaps));
            while (j >= 0 && a[j] > key) {
                comparisons++;
                states.push(this._state(a, sorted, [j], [], { current:[j+1] }, 'compare', 6,
                    ar ? `${a[j]} > ${key}، نقل لليمين` : `${a[j]} > ${key}, shift right`, comparisons, swaps));
                a[j + 1] = a[j]; swaps++;
                states.push(this._state(a, sorted, [], [j, j+1], {}, 'swap', 7,
                    ar ? `نقل ${a[j]} إلى الموضع ${j+1}` : `Moving ${a[j]} to position ${j+1}`, comparisons, swaps));
                j--;
            }
            a[j + 1] = key;
            sorted.add(i);
            states.push(this._state(a, sorted, [], [], { current:[j+1] }, 'insert', 9,
                ar ? `إدراج ${key} في الموضع ${j+1}` : `Inserting ${key} at position ${j+1}`, comparisons, swaps));
        }
        const allS = new Set([...Array(n).keys()]);
        states.push(this._state(a, allS, [], [], {}, 'complete', 10, ar ? '✅ تم الترتيب!' : '✅ Sorted!', comparisons, swaps));
        return states;
    }

    static quick(arr, lang) {
        const states = [], a = [...arr];
        let comparisons = 0, swaps = 0;
        const ar = lang === 'ar';

        states.push(this._state(a, new Set(), [], [], { pivot:null }, 'initial', 0, ar ? 'الحالة الابتدائية' : 'Initial state', 0, 0));

        const partition = (low, high) => {
            const pivot = a[high], pivotIdx = high;
            let i = low - 1;
            states.push(this._state(a, new Set(), [], [], { pivot:pivotIdx }, 'pivot', 7,
                ar ? `اختيار المحور: ${pivot}` : `Pivot selected: ${pivot}`, comparisons, swaps));
            for (let j = low; j < high; j++) {
                comparisons++;
                states.push(this._state(a, new Set(), [j], [], { pivot:pivotIdx }, 'compare', 10,
                    ar ? `مقارنة ${a[j]} مع المحور ${pivot}` : `Comparing ${a[j]} with pivot ${pivot}`, comparisons, swaps));
                if (a[j] <= pivot) {
                    i++;
                    if (i !== j) {
                        [a[i], a[j]] = [a[j], a[i]]; swaps++;
                        states.push(this._state(a, new Set(), [], [i, j], { pivot:pivotIdx }, 'swap', 11,
                            ar ? `تبديل ${a[j]} ↔ ${a[i]}` : `Swapping ${a[j]} ↔ ${a[i]}`, comparisons, swaps));
                    }
                }
            }
            [a[i+1], a[high]] = [a[high], a[i+1]]; swaps++;
            states.push(this._state(a, new Set(), [], [i+1, high], { pivot:null }, 'swap', 13,
                ar ? 'وضع المحور في موضعه الصحيح' : 'Placing pivot in correct position', comparisons, swaps));
            return i + 1;
        };

        const qs = (lo, hi) => { if (lo < hi) { const pi = partition(lo, hi); qs(lo, pi - 1); qs(pi + 1, hi); } };
        qs(0, a.length - 1);

        const allS = new Set([...Array(a.length).keys()]);
        states.push(this._state(a, allS, [], [], { pivot:null }, 'complete', 5, ar ? '✅ تم الترتيب!' : '✅ Sorted!', comparisons, swaps));
        return states;
    }

    static merge(arr, lang) {
        const states = [], a = [...arr];
        let comparisons = 0, swaps = 0;
        const ar = lang === 'ar';

        states.push(this._state(a, new Set(), [], [], { merging:[] }, 'initial', 0, ar ? 'الحالة الابتدائية' : 'Initial state', 0, 0));

        const ms = (start, end) => {
            if (start >= end) return [a[start]];
            const mid = Math.floor((start + end) / 2);
            states.push(this._state(a, new Set(), [], [], { merging:[], range:[start, mid, end] }, 'partition', 4,
                ar ? `تقسيم [${start}..${end}]` : `Splitting [${start}..${end}]`, comparisons, swaps));
            const left = ms(start, mid), right = ms(mid + 1, end);
            const result = [];
            let i = 0, j = 0;
            while (i < left.length && j < right.length) {
                comparisons++;
                states.push(this._state(a, new Set(), [start + i, mid + 1 + j], [], { merging:[] }, 'compare', 11,
                    ar ? `مقارنة ${left[i]} مع ${right[j]}` : `Comparing ${left[i]} with ${right[j]}`, comparisons, swaps));
                result.push(left[i] <= right[j] ? left[i++] : right[j++]);
            }
            while (i < left.length) result.push(left[i++]);
            while (j < right.length) result.push(right[j++]);
            result.forEach((v, k) => { a[start + k] = v; swaps++; });
            states.push(this._state(a, new Set(), [], [], { merging: result.map((_,k) => start + k) }, 'merge', 16,
                ar ? `دمج: [${result.join(', ')}]` : `Merging: [${result.join(', ')}]`, comparisons, swaps));
            return result;
        };

        ms(0, a.length - 1);
        const allS = new Set([...Array(a.length).keys()]);
        states.push(this._state(a, allS, [], [], { merging:[] }, 'complete', 6, ar ? '✅ تم الترتيب!' : '✅ Sorted!', comparisons, swaps));
        return states;
    }
}

/* ═══════════════════════════════════════════
   BST Engine
═══════════════════════════════════════════ */
class BSTNode { constructor(v) { this.value = v; this.left = null; this.right = null; } }

class BSTEngine {
    constructor() { this.root = null; this.nodeCount = 0; }

    serialize(node) {
        if (!node) return null;
        return { value: node.value, left: this.serialize(node.left), right: this.serialize(node.right) };
    }

    getDepth(node) {
        if (!node) return 0;
        return 1 + Math.max(this.getDepth(node.left), this.getDepth(node.right));
    }

    _findMin(node) { while (node && node.left) node = node.left; return node; }

    _baseState(action, line, explanation, comparisons, steps) {
        return {
            tree: this.serialize(this.root), highlights: [],
            action, line, explanation, comparisons, steps,
            depth: this.getDepth(this.root), nodeCount: this.nodeCount
        };
    }

    generateInsertStates(value, lang) {
        const states = [], ar = lang === 'ar';
        let comparisons = 0, steps = 0;

        if (!this.root) {
            states.push({ ...this._baseState('initial', 1, ar ? `الشجرة فارغة، إنشاء جذر` : 'Tree empty, creating root', 0, 0) });
            this.root = new BSTNode(value); this.nodeCount = 1;
            states.push({ tree: this.serialize(this.root), highlights: [{ value, color: 'success' }],
                action: 'insert', line: 2,
                explanation: ar ? `✅ إدراج ${value} كجذر` : `✅ Inserted ${value} as root`,
                comparisons: 0, steps: 1, depth: 1, nodeCount: 1 });
            return states;
        }

        states.push({ ...this._baseState('initial', 0, ar ? `بدء إدراج ${value}` : `Starting insertion of ${value}`, 0, 0) });

        let current = this.root;
        const path = [];
        while (current) {
            comparisons++; steps++;
            path.push(current.value);
            states.push({ tree: this.serialize(this.root), highlights: [{ value: current.value, color: 'current' }],
                action: 'compare', line: 3,
                explanation: ar ? `مقارنة ${value} مع ${current.value}` : `Comparing ${value} with ${current.value}`,
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount, path: [...path] });

            if (value === current.value) {
                states.push({ tree: this.serialize(this.root), highlights: [{ value: current.value, color: 'warning' }],
                    action: 'complete', line: 0,
                    explanation: ar ? `⚠️ القيمة ${value} موجودة مسبقًا` : `⚠️ Value ${value} already exists`,
                    comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
                return states;
            }

            const goLeft = value < current.value;
            states.push({ tree: this.serialize(this.root), highlights: [{ value: current.value, color: 'comparing' }],
                action: 'search', line: goLeft ? 4 : 6,
                explanation: goLeft
                    ? (ar ? `${value} < ${current.value}، يسار` : `${value} < ${current.value}, go left`)
                    : (ar ? `${value} > ${current.value}، يمين` : `${value} > ${current.value}, go right`),
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount, path: [...path] });

            const child = goLeft ? current.left : current.right;
            if (!child) {
                if (goLeft) current.left  = new BSTNode(value);
                else        current.right = new BSTNode(value);
                this.nodeCount++;
                states.push({ tree: this.serialize(this.root),
                    highlights: [{ value, color: 'success' }, { value: current.value, color: 'comparing' }],
                    action: 'insert', line: goLeft ? 5 : 7,
                    explanation: ar ? `✅ إدراج ${value}` : `✅ Inserted ${value}`,
                    comparisons, steps: steps + 1, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
                return states;
            }
            current = child;
        }
        return states;
    }

    generateSearchStates(value, lang) {
        const states = [], ar = lang === 'ar';
        let comparisons = 0, steps = 0;

        if (!this.root) {
            states.push({ tree: null, highlights: [], action: 'complete', line: 1,
                explanation: ar ? '❌ الشجرة فارغة' : '❌ Tree is empty', comparisons, steps, depth: 0, nodeCount: 0 });
            return states;
        }

        states.push({ ...this._baseState('initial', 0, ar ? `بحث عن ${value}` : `Searching for ${value}`, 0, 0) });

        let current = this.root;
        const path = [];
        while (current) {
            comparisons++; steps++;
            path.push(current.value);
            states.push({ tree: this.serialize(this.root), highlights: [{ value: current.value, color: 'current' }],
                action: 'search', line: 3,
                explanation: ar ? `فحص العقدة ${current.value}` : `Visiting node ${current.value}`,
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount, path: [...path] });

            if (value === current.value) {
                states.push({ tree: this.serialize(this.root), highlights: [{ value: current.value, color: 'success' }],
                    action: 'complete', line: 5,
                    explanation: ar ? `✅ وُجد ${value}!` : `✅ Found ${value}!`,
                    comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
                return states;
            }

            const goLeft = value < current.value;
            states.push({ tree: this.serialize(this.root), highlights: [{ value: current.value, color: 'comparing' }],
                action: 'search', line: goLeft ? 6 : 8,
                explanation: goLeft
                    ? (ar ? `${value} < ${current.value}، بحث يسار` : `${value} < ${current.value}, search left`)
                    : (ar ? `${value} > ${current.value}، بحث يمين` : `${value} > ${current.value}, search right`),
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
            current = goLeft ? current.left : current.right;
        }

        states.push({ tree: this.serialize(this.root),
            highlights: path.map(v => ({ value: v, color: 'danger' })),
            action: 'complete', line: 2,
            explanation: ar ? `❌ ${value} غير موجود` : `❌ ${value} not found`,
            comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
        return states;
    }

    generateDeleteStates(value, lang) {
        const states = [], ar = lang === 'ar';
        let comparisons = 0, steps = 0;

        if (!this.root) {
            states.push({ tree: null, highlights: [], action: 'complete', line: 1,
                explanation: ar ? '❌ الشجرة فارغة' : '❌ Tree is empty', comparisons, steps, depth: 0, nodeCount: 0 });
            return states;
        }

        states.push({ ...this._baseState('initial', 0, ar ? `حذف ${value}` : `Deleting ${value}`, 0, 0) });

        const deleteNode = (node) => {
            if (!node) {
                states.push({ tree: this.serialize(this.root), highlights: [], action: 'complete', line: 1,
                    explanation: ar ? `❌ ${value} غير موجود` : `❌ ${value} not found`,
                    comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
                return null;
            }
            comparisons++; steps++;
            states.push({ tree: this.serialize(this.root), highlights: [{ value: node.value, color: 'current' }],
                action: 'compare', line: 2,
                explanation: ar ? `مقارنة ${value} مع ${node.value}` : `Comparing ${value} with ${node.value}`,
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });

            if (value < node.value) {
                states.push({ tree: this.serialize(this.root), highlights: [{ value: node.value, color: 'comparing' }],
                    action: 'search', line: 3,
                    explanation: ar ? `${value} < ${node.value}، بحث يسار` : `${value} < ${node.value}, search left`,
                    comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
                node.left = deleteNode(node.left);
                return node;
            }
            if (value > node.value) {
                states.push({ tree: this.serialize(this.root), highlights: [{ value: node.value, color: 'comparing' }],
                    action: 'search', line: 5,
                    explanation: ar ? `${value} > ${node.value}، بحث يمين` : `${value} > ${node.value}, search right`,
                    comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
                node.right = deleteNode(node.right);
                return node;
            }

            // Found!
            states.push({ tree: this.serialize(this.root), highlights: [{ value: node.value, color: 'danger' }],
                action: 'delete', line: 6,
                explanation: ar ? `وُجدت العقدة ${value}، جاري الحذف` : `Found node ${value}, deleting`,
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });

            if (!node.left)  { this.nodeCount--; return node.right; }
            if (!node.right) { this.nodeCount--; return node.left; }

            states.push({ tree: this.serialize(this.root), highlights: [{ value: node.value, color: 'current' }],
                action: 'search', line: 9,
                explanation: ar ? 'العقدة لها فرعان، البحث عن الخلف' : 'Two children — finding in-order successor',
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });

            const successor = this._findMin(node.right);
            states.push({ tree: this.serialize(this.root), highlights: [{ value: successor.value, color: 'success' }],
                action: 'search', line: 10,
                explanation: ar ? `الخلف: ${successor.value}` : `Successor: ${successor.value}`,
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });

            node.value = successor.value;
            states.push({ tree: this.serialize(this.root), highlights: [{ value: node.value, color: 'comparing' }],
                action: 'swap', line: 11,
                explanation: ar ? `استبدل بـ ${successor.value}` : `Replaced with ${successor.value}`,
                comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });

            // Now delete the successor from right subtree by temporarily changing value
            const succVal = successor.value;
            const origValue = value;
            // eslint-disable-next-line no-unused-vars
            // We need deleteNode to target the successor, so we close over succVal:
            // Actually our deleteNode uses `value` from outer closure, so we use a helper:
            node.right = deleteSuccessor(node.right, succVal);
            return node;
        };

        // Helper that deletes a specific value (successor) from a subtree
        const deleteSuccessor = (node, targetVal) => {
            if (!node) return null;
            if (targetVal < node.value) { node.left = deleteSuccessor(node.left, targetVal); return node; }
            if (targetVal > node.value) { node.right = deleteSuccessor(node.right, targetVal); return node; }
            this.nodeCount--;
            if (!node.left)  return node.right;
            if (!node.right) return node.left;
            const s = this._findMin(node.right);
            node.value = s.value;
            node.right = deleteSuccessor(node.right, s.value);
            return node;
        };

        this.root = deleteNode(this.root);

        states.push({ tree: this.serialize(this.root), highlights: [], action: 'complete', line: 13,
            explanation: ar ? '✅ اكتمل الحذف' : '✅ Deletion complete',
            comparisons, steps, depth: this.getDepth(this.root), nodeCount: this.nodeCount });
        return states;
    }
}

/* ═══════════════════════════════════════════
   Tree Renderer
═══════════════════════════════════════════ */
class TreeRenderer {
    static render(container, tree, highlights = []) {
        if (!tree) {
            container.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M12 22c4.97 0 9-2.24 9-5V7c0-2.76-4.03-5-9-5S3 4.24 3 7v10c0 2.76 4.03 5 9 5z"/></svg><p>Empty Tree</p></div>`;
            return;
        }
        const positions = new Map();
        const depth  = this._depth(tree);
        const width  = Math.max(600, (container.clientWidth || 600) - 20);
        const height = Math.max(400, depth * 90 + 80);
        this._positions(tree, width / 2, 45, width / 4, positions);

        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg');
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.style.cssText = 'width:100%;height:100%;overflow:visible';

        this._edges(svg, tree, positions, ns);
        this._nodes(svg, tree, positions, highlights, ns);

        container.innerHTML = '';
        container.appendChild(svg);
    }

    static _depth(n) { return !n ? 0 : 1 + Math.max(this._depth(n.left), this._depth(n.right)); }
    static _positions(n, x, y, offset, map) {
        if (!n) return;
        map.set(n.value, { x, y });
        this._positions(n.left,  x - offset, y + 72, Math.max(offset / 2, 28), map);
        this._positions(n.right, x + offset, y + 72, Math.max(offset / 2, 28), map);
    }

    static _edges(svg, node, positions, ns) {
        if (!node) return;
        const pos = positions.get(node.value);
        ['left', 'right'].forEach(side => {
            if (node[side]) {
                const cp = positions.get(node[side].value);
                const line = document.createElementNS(ns, 'line');
                Object.entries({ x1: pos.x, y1: pos.y, x2: cp.x, y2: cp.y,
                    stroke: 'rgba(0,102,255,.4)', 'stroke-width': '2', 'stroke-linecap': 'round' })
                    .forEach(([k, v]) => line.setAttribute(k, v));
                svg.appendChild(line);
                this._edges(svg, node[side], positions, ns);
            }
        });
    }

    static _nodes(svg, node, positions, highlights, ns) {
        if (!node) return;
        const pos = positions.get(node.value);
        const h   = highlights.find(h => h.value === node.value);
        const COLOR_MAP = { current: ['#2196F3','#64B5F6'], comparing: ['#FFB800','#FFD54F'],
            success: ['#00C853','#69F0AE'], danger: ['#FF4757','#FF6B6B'], warning: ['#FFB800','#FFD54F'] };
        const [fill, stroke] = h ? (COLOR_MAP[h.color] || ['#0066FF','#3385FF']) : ['#0066FF','#3385FF'];

        // Glow ring
        if (h) {
            const glow = document.createElementNS(ns, 'circle');
            Object.entries({ cx: pos.x, cy: pos.y, r: 30, fill: 'none', stroke: fill, 'stroke-width': 2, opacity: .3 })
                .forEach(([k, v]) => glow.setAttribute(k, v));
            svg.appendChild(glow);
        }

        const circle = document.createElementNS(ns, 'circle');
        Object.entries({ cx: pos.x, cy: pos.y, r: 22, fill, stroke, 'stroke-width': 3 })
            .forEach(([k, v]) => circle.setAttribute(k, v));
        svg.appendChild(circle);

        const text = document.createElementNS(ns, 'text');
        Object.entries({ x: pos.x, y: pos.y + 5, 'text-anchor': 'middle', fill: 'white',
            'font-size': '13', 'font-weight': '700', 'font-family': 'Inter,sans-serif' })
            .forEach(([k, v]) => text.setAttribute(k, v));
        text.textContent = node.value;
        svg.appendChild(text);

        this._nodes(svg, node.left,  positions, highlights, ns);
        this._nodes(svg, node.right, positions, highlights, ns);
    }
}

/* ═══════════════════════════════════════════
   Main Application
═══════════════════════════════════════════ */
class App {
    constructor() {
        this.lang            = 'ar';
        this.currentPage     = 'home';
        this.currentSorting  = 'bubble';
        this.currentTreeOp   = 'bst-insert';
        this.sortingStates   = new StateManager();
        this.treeStates      = new StateManager();
        this.bst             = new BSTEngine();
        this.sortingPlaying  = false;
        this.treePlaying     = false;
        this.sortingTimer    = null;
        this.treeTimer       = null;
        this.particles       = null;
        this._init();
    }

    _init() {
        this.particles = new ParticleSystem(document.getElementById('particles-canvas'));
        this.renderSortingCards();
        this.renderTreeCards();
        // BUG FIX: pre-initialize sorting page so nav button works without visiting home first
        this.openSorting('bubble', false);
        document.addEventListener('keydown', (e) => this._handleKey(e));
        window.addEventListener('beforeunload', () => this._cleanup());
    }

    _cleanup() {
        this.stopSorting(); this.stopTree();
        this.particles?.destroy();
    }

    /* ── Language ── */
    toggleLanguage() {
        this.lang = this.lang === 'ar' ? 'en' : 'ar';
        document.documentElement.dir  = this.lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = this.lang;
        document.getElementById('langText').textContent       = this.lang === 'ar' ? 'EN' : 'AR';
        document.getElementById('mobileLangText').textContent = this.lang === 'ar' ? 'English' : 'العربية';
        this._applyTranslations();
        this.renderSortingCards();
        this.renderTreeCards();
        // Refresh current sorting/tree page labels
        const sortAlgo = ALGORITHMS.sorting.find(a => a.id === this.currentSorting);
        if (sortAlgo) this._setSortingHeader(sortAlgo);
        this._renderSortingLegend();
        this._renderTreeLegend();
        showToast(TRANSLATIONS[this.lang].langChanged, 'success');
    }

    _applyTranslations() {
        const t = TRANSLATIONS[this.lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });
    }

    /* ── Navigation ── */
    navigate(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-link, .mobile-link').forEach(l => l.classList.remove('active'));
        document.getElementById(`page-${page}`)?.classList.add('active');
        document.querySelectorAll(`[data-page="${page}"]`).forEach(l => l.classList.add('active'));
        this.currentPage = page;
        this.stopSorting(); this.stopTree();
    }

    toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu');
        const open = menu.classList.toggle('open');
        document.getElementById('navToggleBtn').setAttribute('aria-expanded', open);
    }

    closeMobileMenu() {
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('navToggleBtn').setAttribute('aria-expanded', 'false');
    }

    /* ── Cards ── */
    renderSortingCards() {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('sortingCards').innerHTML =
            ALGORITHMS.sorting.map(a => `
            <div class="algo-card" role="listitem" onclick="app.openSorting('${a.id}')" tabindex="0"
                 onkeydown="if(event.key==='Enter'||event.key===' ')app.openSorting('${a.id}')"
                 aria-label="${t[a.id + 'Sort'] || a.id}">
                <div class="algo-card-header">
                    <div class="algo-card-icon" aria-hidden="true">${a.icon}</div>
                    <div class="algo-card-title">${SORT_TITLE_MAP[a.id] || a.id}</div>
                </div>
                <div class="algo-card-desc">${t[a.id + 'SortDesc'] || ''}</div>
                <div class="algo-card-meta">
                    <div class="meta-tag"><span>${t.best}:</span><span class="value">${a.timeBest}</span></div>
                    <div class="meta-tag"><span>${t.avg}:</span><span class="value">${a.timeAvg}</span></div>
                    <div class="meta-tag"><span>${t.worst}:</span><span class="value">${a.timeWorst}</span></div>
                    <div class="meta-tag"><span>${t.space}:</span><span class="value">${a.space}</span></div>
                </div>
            </div>`).join('');
    }

    renderTreeCards() {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('treeCards').innerHTML =
            ALGORITHMS.tree.map(a => `
            <div class="algo-card" role="listitem" onclick="app.openTree('${a.id}')" tabindex="0"
                 onkeydown="if(event.key==='Enter'||event.key===' ')app.openTree('${a.id}')"
                 aria-label="${t[a.id] || a.id}">
                <div class="algo-card-header">
                    <div class="algo-card-icon" aria-hidden="true">${a.icon}</div>
                    <div class="algo-card-title">${t[a.id] || a.id}</div>
                </div>
                <div class="algo-card-desc">${t[a.id + 'Desc'] || ''}</div>
                <div class="algo-card-meta">
                    <div class="meta-tag"><span>${t.best}:</span><span class="value">${a.timeBest}</span></div>
                    <div class="meta-tag"><span>${t.avg}:</span><span class="value">${a.timeAvg}</span></div>
                    <div class="meta-tag"><span>${t.worst}:</span><span class="value">${a.timeWorst}</span></div>
                    <div class="meta-tag"><span>${t.space}:</span><span class="value">${a.space}</span></div>
                </div>
            </div>`).join('');
    }

    /* ── Sorting helpers ── */
    _setSortingHeader(algo) {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('sortingTitle').textContent    = SORT_TITLE_MAP[algo.id] || algo.id;
        document.getElementById('sortingSubtitle').textContent = t[algo.id + 'Sort'] || algo.id;
        document.getElementById('sortingBadges').innerHTML = `
            <div class="page-badge">${t.best}: ${algo.timeBest}</div>
            <div class="page-badge">${t.avg}: ${algo.timeAvg}</div>
            <div class="page-badge">${t.worst}: ${algo.timeWorst}</div>`;
    }

    openSorting(id, doNavigate = true) {
        this.currentSorting = id;
        const algo = ALGORITHMS.sorting.find(a => a.id === id);
        if (!algo) return;
        this._setSortingHeader(algo);
        this._renderPseudoCode('pseudoCode', algo.pseudoCode);
        this._renderSortingLegend();
        if (doNavigate) { this.navigate('sorting'); this.resetSorting(); }
    }

    _renderSortingLegend() {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('sortingLegend').innerHTML = `
            <div class="legend-item"><div class="legend-dot" style="background:var(--primary)"></div><span>${t.default}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--warning)"></div><span>${t.comparing}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--danger)"></div><span>${t.swapping}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--success)"></div><span>${t.sorted}</span></div>`;
    }

    generateRandomArray() {
        const size = Math.min(50, Math.max(3, parseInt(document.getElementById('arraySize').value) || 15));
        const arr  = Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
        document.getElementById('sortingInput').value = arr.join(', ');
        this._renderBars(arr);
        showToast(TRANSLATIONS[this.lang].generated, 'success');
    }

    _parseArray(silent = false) {
        const raw = document.getElementById('sortingInput').value.trim();
        if (!raw) { if (!silent) showToast(TRANSLATIONS[this.lang].errEnterData, 'error'); return null; }
        const arr = raw.split(',').map(v => parseInt(v.trim(), 10)).filter(v => Number.isFinite(v) && v > 0);
        if (arr.length < 2) { if (!silent) showToast(TRANSLATIONS[this.lang].errMinElements, 'error'); return null; }
        return arr.slice(0, 50);
    }

    _renderBars(arr, state = null) {
        const container = document.getElementById('barsContainer');
        const max = Math.max(...arr);
        container.innerHTML = arr.map((val, i) => {
            const classes = ['bar'];
            if (state) {
                // BUG FIX: sorted is now a properly restored Set (via StateManager custom replacer)
                if (state.sorted instanceof Set ? state.sorted.has(i) : false) classes.push('sorted');
                if (state.comparing?.includes(i)) classes.push('comparing');
                if (state.swapping?.includes(i))  classes.push('swapping');
                if (state.pivot === i)             classes.push('pivot');
                if (state.current?.includes(i))   classes.push('current');
                if (state.minMarker?.includes(i))  classes.push('min-marker');
                if (state.merging?.includes(i))    classes.push('sorted');  // merging → highlight as sorted
            }
            const heightPct = Math.max(2, Math.round((val / max) * 100));
            return `<div class="${classes.join(' ')}" style="height:${heightPct}%" aria-label="${val}"><span class="bar-value">${val}</span></div>`;
        }).join('');
    }

    _renderPseudoCode(id, lines) {
        document.getElementById(id).innerHTML =
            lines.map((line, i) => `<div class="code-line" data-line="${i}">${_escapeHtml(line)}</div>`).join('');
    }

    _highlightLine(id, idx) {
        const container = document.getElementById(id);
        if (!container) return;
        container.querySelectorAll('.code-line').forEach(l => l.classList.remove('active'));
        if (idx >= 0) container.querySelector(`[data-line="${idx}"]`)?.classList.add('active');
    }

    startSorting() {
        const arr = this._parseArray();
        if (!arr) return;
        this.stopSorting();
        this.sortingStates.reset();

        const engines = { bubble: 'bubble', selection: 'selection', insertion: 'insertion', quick: 'quick', merge: 'merge' };
        const method  = engines[this.currentSorting];
        if (!method) return;
        const states = SortingEngine[method](arr, this.lang);
        states.forEach(s => this.sortingStates.addState(s));
        this._enableSortingControls(true);
        this.sortingStates.index = -1;
        this.nextStep();
        showToast(`${TRANSLATIONS[this.lang].steps}: ${this.sortingStates.total}`, 'info');
    }

    _renderSortingState(state) {
        if (!state) return;
        this._renderBars(state.array, state);
        this._highlightLine('pseudoCode', state.line);

        const t = TRANSLATIONS[this.lang];
        const BADGE_CLASS = { compare:'compare', swap:'swap', insert:'insert', complete:'complete', initial:'initial', pivot:'pivot', merge:'merge', partition:'partition' };
        // BUG FIX: 'insert' action label should say "inserting", not the button label
        const BADGE_LABEL = { compare: t.comparing, swap: t.swapping, insert: t.inserting, complete:'✅', initial: t.default, pivot: t.pivot, merge: t.merging, partition: t.partition };
        const badge = state.action ? `<span class="action-badge ${BADGE_CLASS[state.action]||''}">${BADGE_LABEL[state.action]||state.action}</span>` : '';
        document.getElementById('stepExplanation').innerHTML = `${badge}<p style="font-weight:600;margin-top:8px">${_escapeHtml(state.explanation)}</p>`;

        document.getElementById('statComparisons').textContent = state.comparisons;
        document.getElementById('statSwaps').textContent       = state.swaps;
        document.getElementById('statSteps').textContent       = this.sortingStates.index + 1;
        document.getElementById('stepDisplay').textContent     = `${this.sortingStates.index + 1} / ${this.sortingStates.total}`;
        document.getElementById('prevStepBtn').disabled = !this.sortingStates.hasPrev;
        document.getElementById('nextStepBtn').disabled = !this.sortingStates.hasNext;
        if (state.action === 'complete' && !this.sortingStates.hasNext) this.stopSorting();
    }

    nextStep() {
        const state = this.sortingStates.next();
        if (state) this._renderSortingState(state); else this.stopSorting();
    }

    prevStep() {
        const state = this.sortingStates.prev();
        if (state) this._renderSortingState(state);
    }

    togglePlay() {
        if (this.sortingPlaying) this.stopSorting(); else this._startAutoPlay();
    }

    _startAutoPlay() {
        if (!this.sortingStates.total) return;
        this.sortingPlaying = true;
        document.getElementById('playPauseBtn').innerHTML = _pauseIcon();
        const tick = () => {
            if (!this.sortingStates.hasNext) { this.stopSorting(); return; }
            this.nextStep();
            if (this.sortingPlaying) this.sortingTimer = setTimeout(tick, this._speed('speedSlider'));
        };
        tick();
    }

    stopSorting() {
        this.sortingPlaying = false;
        if (this.sortingTimer) { clearTimeout(this.sortingTimer); this.sortingTimer = null; }
        const btn = document.getElementById('playPauseBtn');
        if (btn) btn.innerHTML = _playIcon();
    }

    resetSorting() {
        this.stopSorting();
        this.sortingStates.reset();
        this._enableSortingControls(false);
        const t = TRANSLATIONS[this.lang];
        document.getElementById('barsContainer').innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/></svg><p>${t.enterDataToStart}</p></div>`;
        document.getElementById('stepExplanation').innerHTML = `<p>${t.clickStartToSee}</p>`;
        document.getElementById('statComparisons').textContent = '0';
        document.getElementById('statSwaps').textContent       = '0';
        document.getElementById('statSteps').textContent       = '0';
        document.getElementById('stepDisplay').textContent     = '0 / 0';
        this._highlightLine('pseudoCode', -1);
        // BUG FIX: silently try to render preview bars without showing error toast
        const arr = this._parseArray(true);
        if (arr) this._renderBars(arr);
    }

    _enableSortingControls(on) {
        document.getElementById('playPauseBtn').disabled = !on;
        document.getElementById('nextStepBtn').disabled  = !on;
        document.getElementById('prevStepBtn').disabled  = true;
    }

    /* ── Tree ── */
    openTree(id) {
        this.currentTreeOp = id;
        const algo = ALGORITHMS.tree.find(a => a.id === id);
        if (!algo) return;
        const t = TRANSLATIONS[this.lang];
        const TREE_TITLE_MAP = { 'bst-insert':'BST — Insert', 'bst-search':'BST — Search', 'bst-delete':'BST — Delete' };
        document.getElementById('treeTitle').textContent    = TREE_TITLE_MAP[id] || id;
        document.getElementById('treeSubtitle').textContent = t[id] || id;
        document.getElementById('treeBadges').innerHTML = `
            <div class="page-badge">${t.best}: ${algo.timeBest}</div>
            <div class="page-badge">${t.avg}: ${algo.timeAvg}</div>
            <div class="page-badge">${t.worst}: ${algo.timeWorst}</div>`;
        this._renderPseudoCode('treePseudoCode', algo.pseudoCode);
        this._renderTreeLegend();
        this.navigate('trees');
        this.resetTree();
    }

    _renderTreeLegend() {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('treeLegend').innerHTML = `
            <div class="legend-item"><div class="legend-dot" style="background:var(--primary)"></div><span>${t.normalNode}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:#2196F3"></div><span>${t.currentNode}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--warning)"></div><span>${t.comparing}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--success)"></div><span>${t.successNode}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--danger)"></div><span>${t.deleteNode}</span></div>`;
    }

    insertNode() {
        const raw = document.getElementById('insertInput').value.trim();
        // BUG FIX: specific error message, not the label text
        if (!raw) { showToast(TRANSLATIONS[this.lang].errEnterData, 'error'); return; }
        const values = raw.split(',').map(v => parseInt(v.trim(), 10)).filter(v => Number.isFinite(v));
        if (!values.length) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }

        this.stopTree(); this.treeStates.reset();
        const algo = ALGORITHMS.tree.find(a => a.id === 'bst-insert');
        this._renderPseudoCode('treePseudoCode', algo.pseudoCode);
        values.forEach(v => this.bst.generateInsertStates(v, this.lang).forEach(s => this.treeStates.addState(s)));
        this._enableTreeControls(true);
        this.treeStates.index = -1;
        this.treeNextStep();
        showToast(`${TRANSLATIONS[this.lang].steps}: ${this.treeStates.total}`, 'info');
    }

    searchNode() {
        const v = parseInt(document.getElementById('searchInput').value, 10);
        // BUG FIX: specific error message
        if (!Number.isFinite(v)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        this.stopTree(); this.treeStates.reset();
        const algo = ALGORITHMS.tree.find(a => a.id === 'bst-search');
        this._renderPseudoCode('treePseudoCode', algo.pseudoCode);
        this.bst.generateSearchStates(v, this.lang).forEach(s => this.treeStates.addState(s));
        this._enableTreeControls(true);
        this.treeStates.index = -1;
        this.treeNextStep();
        showToast(`${TRANSLATIONS[this.lang].search}: ${v}`, 'info');
    }

    deleteNode() {
        const v = parseInt(document.getElementById('deleteInput').value, 10);
        // BUG FIX: specific error message
        if (!Number.isFinite(v)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        this.stopTree(); this.treeStates.reset();
        const algo = ALGORITHMS.tree.find(a => a.id === 'bst-delete');
        this._renderPseudoCode('treePseudoCode', algo.pseudoCode);
        this.bst.generateDeleteStates(v, this.lang).forEach(s => this.treeStates.addState(s));
        this._enableTreeControls(true);
        this.treeStates.index = -1;
        this.treeNextStep();
        showToast(`${TRANSLATIONS[this.lang].delete}: ${v}`, 'info');
    }

    clearTree() {
        this.stopTree(); this.treeStates.reset();
        this.bst = new BSTEngine();
        this._enableTreeControls(false);
        const t = TRANSLATIONS[this.lang];
        document.getElementById('treeCanvas').innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M12 22c4.97 0 9-2.24 9-5V7c0-2.76-4.03-5-9-5S3 4.24 3 7v10c0 2.76 4.03 5 9 5z"/></svg><p>${t.insertToBuild}</p></div>`;
        document.getElementById('treeStepExplanation').innerHTML = `<p>${t.performOperation}</p>`;
        ['treeStatNodes','treeStatDepth','treeStatComparisons','treeStatSteps'].forEach(id => document.getElementById(id).textContent = '0');
        document.getElementById('treeStepDisplay').textContent = '0 / 0';
        this._highlightLine('treePseudoCode', -1);
        showToast(t.treeCleared, 'info');
    }

    _renderTreeState(state) {
        if (!state) return;
        const canvas = document.getElementById('treeCanvas');
        if (state.tree) TreeRenderer.render(canvas, state.tree, state.highlights || []);
        else {
            const t = TRANSLATIONS[this.lang];
            canvas.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M12 22c4.97 0 9-2.24 9-5V7c0-2.76-4.03-5-9-5S3 4.24 3 7v10c0 2.76 4.03 5 9 5z"/></svg><p>${t.insertToBuild}</p></div>`;
        }
        this._highlightLine('treePseudoCode', state.line);

        const t = TRANSLATIONS[this.lang];
        // BUG FIX: 'compare' action uses t.comparing (مقارنة), not t.comparisons (مقارنات)
        const BADGE_CLASS = { compare:'compare', insert:'insert', search:'search', delete:'delete', complete:'complete', initial:'initial', swap:'swap' };
        const BADGE_LABEL = { compare: t.comparing, insert: t.inserting, search: t.searching, delete: t.deleting, complete:'✅', initial: t.default, swap: t.swapping };
        const badge = state.action ? `<span class="action-badge ${BADGE_CLASS[state.action]||''}">${BADGE_LABEL[state.action]||state.action}</span>` : '';
        const pathHtml = state.path?.length
            ? `<div class="path-display"><span class="label">${t.pathLabel}</span> ${state.path.join(' → ')}</div>`
            : '';
        document.getElementById('treeStepExplanation').innerHTML = `${badge}<p style="font-weight:600;margin-top:8px">${_escapeHtml(state.explanation)}</p>${pathHtml}`;

        document.getElementById('treeStatNodes').textContent       = state.nodeCount;
        document.getElementById('treeStatDepth').textContent       = state.depth;
        document.getElementById('treeStatComparisons').textContent = state.comparisons;
        document.getElementById('treeStatSteps').textContent       = state.steps;
        document.getElementById('treeStepDisplay').textContent     = `${this.treeStates.index + 1} / ${this.treeStates.total}`;
        document.getElementById('treePrevBtn').disabled = !this.treeStates.hasPrev;
        document.getElementById('treeNextBtn').disabled = !this.treeStates.hasNext;
        if (state.action === 'complete' && !this.treeStates.hasNext) this.stopTree();
    }

    treeNextStep() {
        const state = this.treeStates.next();
        if (state) this._renderTreeState(state); else this.stopTree();
    }

    treePrevStep() {
        const state = this.treeStates.prev();
        if (state) this._renderTreeState(state);
    }

    toggleTreePlay() {
        if (this.treePlaying) this.stopTree(); else this._startTreeAutoPlay();
    }

    _startTreeAutoPlay() {
        if (!this.treeStates.total) return;
        this.treePlaying = true;
        document.getElementById('treePlayBtn').innerHTML = _pauseIcon();
        const tick = () => {
            if (!this.treeStates.hasNext) { this.stopTree(); return; }
            this.treeNextStep();
            if (this.treePlaying) this.treeTimer = setTimeout(tick, this._speed('treeSpeedSlider'));
        };
        tick();
    }

    stopTree() {
        this.treePlaying = false;
        if (this.treeTimer) { clearTimeout(this.treeTimer); this.treeTimer = null; }
        const btn = document.getElementById('treePlayBtn');
        if (btn) btn.innerHTML = _playIcon();
    }

    resetTree() {
        this.stopTree(); this.treeStates.reset();
        this._enableTreeControls(false);
        const t = TRANSLATIONS[this.lang];
        const canvas = document.getElementById('treeCanvas');
        document.getElementById('treeStepExplanation').innerHTML = `<p>${t.performOperation}</p>`;
        ['treeStatComparisons','treeStatSteps'].forEach(id => document.getElementById(id).textContent = '0');
        document.getElementById('treeStatNodes').textContent = this.bst.nodeCount;
        document.getElementById('treeStatDepth').textContent = this.bst.getDepth(this.bst.root);
        document.getElementById('treeStepDisplay').textContent = '0 / 0';
        this._highlightLine('treePseudoCode', -1);
        if (this.bst.root) TreeRenderer.render(canvas, this.bst.serialize(this.bst.root));
        else canvas.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M12 22c4.97 0 9-2.24 9-5V7c0-2.76-4.03-5-9-5S3 4.24 3 7v10c0 2.76 4.03 5 9 5z"/></svg><p>${t.insertToBuild}</p></div>`;
    }

    _enableTreeControls(on) {
        document.getElementById('treePlayBtn').disabled = !on;
        document.getElementById('treeNextBtn').disabled = !on;
        document.getElementById('treePrevBtn').disabled = true;
    }

    _speed(sliderId) {
        return 1100 - parseInt(document.getElementById(sliderId).value, 10) * 100;
    }

    /* ── Keyboard ── */
    _handleKey(e) {
        if (e.target.tagName === 'INPUT') return; // don't hijack input fields
        if (this.currentPage === 'sorting') {
            if (e.key === 'ArrowRight') { e.preventDefault(); this.lang === 'ar' ? this.prevStep() : this.nextStep(); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); this.lang === 'ar' ? this.nextStep() : this.prevStep(); }
            else if (e.key === ' ') { e.preventDefault(); this.togglePlay(); }
        } else if (this.currentPage === 'trees') {
            if (e.key === 'ArrowRight') { e.preventDefault(); this.lang === 'ar' ? this.treePrevStep() : this.treeNextStep(); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); this.lang === 'ar' ? this.treeNextStep() : this.treePrevStep(); }
            else if (e.key === ' ') { e.preventDefault(); this.toggleTreePlay(); }
        }
    }
}

/* ── Helpers ── */
function _playIcon()  { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>'; }
function _pauseIcon() { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'; }

// BUG FIX: sanitize dynamic HTML to prevent XSS from user input in explanation text
function _escapeHtml(str) {
    if (typeof str !== 'string') return String(str ?? '');
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

/* ── Boot ── */
const app = new App();
