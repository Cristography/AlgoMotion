

/* ═══════════════════════════════════════════
   Translations
═══════════════════════════════════════════ */
const TRANSLATIONS = {
ar: {
        home:'الرئيسية', sorting:'الترتيب', searching:'البحث', lists:'القوائم', stacks:'المكدس', graphs:'الرسوم', trees:'الأشجار',
        heroBadge:'منصة تعليمية تفاعلية',
        heroTitle:'تصور الخوارزميات<br>بشكل احترافي',
        heroSubtitle:'استكشف وفهم الخوارزميات وهياكل البيانات من خلال تصورات تفاعليةخطوة بخطوة',
        startExploring:'ابدأ الاستكشاف', exploreTrees:'استكشف الأشجار',
        algorithms:'خوارزميات', dataStructures:'هياكل بيانات', interactions:'تفاعلات',
        features:'المميزات', featuresDesc:'أدوات متقدمة لفهم الخوارزميات',
        realTimeViz:'تصور فوري', realTimeVizDesc:'شاهد الخوارزميات تعمل في الوقت الحقيقي مع تحكم كامل',
        stepByStep:'خطوة بخطوة', stepByStepDesc:'تعلم كلخطوة مع شرح مفصل والكود المرجعي',
        multiLang:'دعم متعدد اللغات', multiLangDesc:'واجهة بالعربية والإنجليزية مع دعم كامل للاتجاهين',
        responsive:'تصميم متجاوب', responsiveDesc:'يعمل بشكل مثالي على جميع الأجهزة والشاشات',
        availableAlgos:'الخوارزميات المتاحة', availableAlgosDesc:'اختر الخوارزمية التي تريد استكشافها',
        sortingAlgorithms:'خوارزميات الترتيب', treeStructures:'هياكل البيانات الشجرية',
        inputData:'إدخال البيانات', inputPlaceholder:'أرقام مفصولة بفاحظة',
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
        performOperation:'نفّذ عملية لرؤية الشر��',
        best:'الأفضل', avg:'المتوسط', worst:'الأسوأ', space:'المكان',
        default:'افتراضي', comparing:'مقارنة', swapping:'تبديل',
        sorted:'مرتب', pivot:'محور', partition:'تقسيم', merging:'دمج',
        inserting:'إدراج', searching:'بحث', deleting:'حذف',
        normalNode:'عقدة', currentNode:'الحالية', successNode:'نجاح', deleteNode:'حذف',
        bubbleSort:'الترتيب الفقاعي', selectionSort:'ترتيب الاختيار',
        insertionSort:'ترتيب الإدراج', quickSort:'الترتيب السريع', mergeSort:'ترتيب الدمج',
        'bst-insert':'إدراج BST', 'bst-search':'بحث BST', 'bst-delete':'حذف BST',
        // NEW: Search algorithms
        linearSearch:'البحث الخطي', binarySearch:'البحث الثنائي',
        linearSearchDesc:'يفحص كل عنصر حتى إيجاده أو استنفاد المصفوفة',
        binarySearchDesc:'يستخدمDivide & Conquer للمصفوفات المرتبة',
        // NEW: Linked List
        linkedList:'القائمة المترابطة',
        listOperations:'عمليات القائمة', listVisualization:'تصور القائمة',
        listStats:'إحصائيات القائمة', clearList:'مسح القائمة',
        listInsert:'إدراج عنصر', listDelete:'حذف عنصر',
        listSearch:'البحث في القائمة',
        insertAtPosition:'إدراج في موضع',
        // NEW: Stack/Queue
        stack:'المكدس', queue:'الطابور',
        stackOperations:'عمليات المكدس', queueOperations:'عمليات الطابور',
        stackVisualization:'تصور المكدس', queueVisualization:'تصور الطابور',
        stackStats:'إحصائيات المكدس', push:'دفع (Push)', pop:'سحب (Pop)', peek:'نظرة (Peek)',
        size:'الحجم', top:'القمة', result:'النتيجة',
        clearStack:'مسح الكل', performStackOp:'نفّذ عملية للمكدس',
        switchToQueue:'تحويل للطابور', switchToStack:'تحويل للمكدس',
        // NEW: Graph
        graph:'الرسم البياني', graphs:'الرسوم', graphTraversal:'اجتياز الرسوم',
        graphOperations:'إدخال الرسم', graphVisualization:'تصور الرسم',
        graphStats:'إحصائيات الرسم', edges:'الحواف', visited:'زار', edgesInput:'الحواف: edges',
        buildGraph:'إنشاء الرسم', sample:'عينة',
        startNode:'عقدة البداية', startTraversal:'بدء الاجتياز',
        buildGraphFirst:'أنشئ رسمًا للبدء',
        // errors / messages
        errEnterData:'يرجى إدخال بيانات صحيحة (أرقام مفصولة بفاصلة)',
        errMinElements:'يرجى إدخال عنصرين على الأقل',
        errEnterNumber:'يرجى إدخال رقم صحيح',
        generated:'تم توليد مصفوفة عشوائية بنجاح',
        langChanged:'تم تغيير اللغة', treeCleared:'تم مسح الشجرة',
        pathLabel:'المسار:', targetValue:'القيمة المطلوبة',
        startSearch:'بدء البحث', clickStartToSearch:'اضغط "بدء البحث" لبدء الخوارزمية',
        notFound:'غير موجود', foundAt:'وُجد في الموضع',
        listCleared:'تم مسح القائمة',
        stackCleared:'تم مسح المكدس', queueCleared:'تم مسح الطابور',
        graphBuilt:'تم إنشاء الرسم', graphCleared:'تم مسح الرسم',
        empty:'فارغ', full:'ممتلئ'
    },
    en: {
        home:'Home', sorting:'Sorting', searching:'Search', lists:'Lists', stacks:'Stack', graphs:'Graphs', trees:'Trees',
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
        // NEW: Search algorithms
        linearSearch:'Linear Search', binarySearch:'Binary Search',
        linearSearchDesc:'Checks each element until found or array exhausted',
        binarySearchDesc:'Uses divide & conquer for sorted arrays',
        // NEW: Linked List
        linkedList:'Linked List',
        listOperations:'List Operations', listVisualization:'List Visualization',
        listStats:'List Statistics', clearList:'Clear List',
        listInsert:'Insert Element', listDelete:'Delete Element',
        listSearch:'Search List',
        insertAtPosition:'Insert at Position',
        // NEW: Stack/Queue
        stack:'Stack', queue:'Queue',
        stackOperations:'Stack Operations', queueOperations:'Queue Operations',
        stackVisualization:'Stack Visualization', queueVisualization:'Queue Visualization',
        stackStats:'Stack Statistics', push:'Push', pop:'Pop', peek:'Peek',
        size:'Size', top:'Top', result:'Result',
        clearStack:'Clear All', performStackOp:'Perform a stack operation',
        switchToQueue:'Switch to Queue', switchToStack:'Switch to Stack',
        // NEW: Graph
        graph:'Graph', graphs:'Graphs', graphTraversal:'Graph Traversal',
        graphOperations:'Graph Input', graphVisualization:'Graph Visualization',
        graphStats:'Graph Statistics', edges:'Edges', visited:'Visited', edgesInput:'Edges:',
        buildGraph:'Build Graph', sample:'Sample',
        startNode:'Start Node', startTraversal:'Start Traversal',
        buildGraphFirst:'Build a graph to start',
        // errors / messages
        errEnterData:'Please enter valid data (comma-separated numbers)',
        errMinElements:'Please enter at least 2 elements',
        errEnterNumber:'Please enter a valid number',
        generated:'Random array generated successfully',
        langChanged:'Language changed', treeCleared:'Tree cleared',
        pathLabel:'Path:', targetValue:'Target Value',
        startSearch:'Start Search', clickStartToSearch:'Click "Start Search" to begin',
        notFound:'Not Found', foundAt:'Found at index',
        listCleared:'List cleared',
        stackCleared:'Stack cleared', queueCleared:'Queue cleared',
        graphBuilt:'Graph built successfully', graphCleared:'Graph cleared',
        empty:'Empty', full:'Full'
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
    searching: [
        {
            id:'linear', icon:'🔎',
            timeBest:'O(1)', timeAvg:'O(n)', timeWorst:'O(n)', space:'O(1)',
            pseudoCode:[
                'function linearSearch(arr, target):',
                '  for i = 0 to arr.length-1:',
                '    if arr[i] == target:',
                '      return i  // Found!',
                '  return -1  // Not found'
            ]
        },
        {
            id:'binary', icon:'⚖️',
            timeBest:'O(1)', timeAvg:'O(log n)', timeWorst:'O(log n)', space:'O(1)',
            pseudoCode:[
                'function binarySearch(arr, target):',
                '  left = 0',
                '  right = arr.length - 1',
                '  while left <= right:',
                '    mid = (left + right) / 2',
                '    if arr[mid] == target:',
                '      return mid',
                '    if arr[mid] < target:',
                '      left = mid + 1',
                '    else: right = mid - 1',
                '  return -1  // Not found'
            ]
        }
    ],
    linkedlist: [
        {
            id:'ll-insert', icon:'➕',
            timeBest:'O(1)', timeAvg:'O(n)', timeWorst:'O(n)', space:'O(1)',
            pseudoCode:[
                'function insert(node, value):',
                '  newNode = Node(value)',
                '  if head is null:',
                '    head = newNode',
                '    return',
                '  current = head',
                '  while current.next:',
                '    current = current.next',
                '  current.next = newNode'
            ]
        },
        {
            id:'ll-search', icon:'🔍',
            timeBest:'O(1)', timeAvg:'O(n)', timeWorst:'O(n)', space:'O(1)',
            pseudoCode:[
                'function search(head, value):',
                '  current = head',
                '  while current:',
                '    if current.value == value:',
                '      return current',
                '    current = current.next',
                '  return null  // Not found'
            ]
        },
        {
            id:'ll-delete', icon:'🗑️',
            timeBest:'O(1)', timeAvg:'O(n)', timeWorst:'O(n)', space:'O(1)',
            pseudoCode:[
                'function delete(head, value):',
                '  if head.value == value:',
                '    return head.next',
                '  current = head',
                '  while current.next:',
                '    if current.next.value == value:',
                '      current.next = current.next.next',
                '      break',
                '    current = current.next',
                '  return head'
            ]
        }
    ],
    stack: [
        {
            id:'stack-push', icon:'⬆️',
            timeBest:'O(1)', timeAvg:'O(1)', timeWorst:'O(1)', space:'O(n)',
            pseudoCode:[
                'function push(stack, value):',
                '  node = Node(value)',
                '  node.next = stack.top',
                '  stack.top = node',
                '  stack.size++'
            ]
        },
        {
            id:'stack-pop', icon:'⬇️',
            timeBest:'O(1)', timeAvg:'O(1)', timeWorst:'O(1)', space:'O(1)',
            pseudoCode:[
                'function pop(stack):',
                '  if stack.top is null:',
                '    return null  // Empty',
                '  value = stack.top.value',
                '  stack.top = stack.top.next',
                '  stack.size--',
                '  return value'
            ]
        }
    ],
    graph: [
        {
            id:'bfs', icon:'📡',
            timeBest:'O(V+E)', timeAvg:'O(V+E)', timeWorst:'O(V+E)', space:'O(V)',
            pseudoCode:[
                'function BFS(graph, start):',
                '  visited = Set()',
                '  queue = [start]',
                '  visited.add(start)',
                '  while queue not empty:',
                '    node = queue.shift()',
                '    for neighbor in graph[node]:',
                '      if neighbor not in visited:',
                '        visited.add(neighbor)',
                '        queue.append(neighbor)'
            ]
        },
        {
            id:'dfs', icon:'🔙',
            timeBest:'O(V+E)', timeAvg:'O(V+E)', timeWorst:'O(V+E)', space:'O(V)',
            pseudoCode:[
                'function DFS(graph, start):',
                '  visited = Set()',
                '  stack = [start]',
                '  while stack not empty:',
                '    node = stack.pop()',
                '    if node not in visited:',
                '      visited.add(node)',
                '      for neighbor in graph[node]:',
                '        if neighbor not in visited:',
                '          stack.append(neighbor)'
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
   Search Engine
═══════════════════════════════════════════ */
class SearchEngine {
    static _state(array, current, found, target, action, line, explanation, comparisons, index) {
        return { array: [...array], current, found, target, action, line, explanation, comparisons, index };
    }

    static linear(arr, target, lang) {
        const states = [], a = [...arr], n = a.length;
        let comparisons = 0;
        const ar = lang === 'ar';
        
        states.push(this._state(a, -1, false, target, 'initial', 0, 
            ar ? `البحث عن ${target} في مصفوفة من ${n} عناصر` : `Searching for ${target} in array of ${n} elements`,
            0, -1));
        
        for (let i = 0; i < n; i++) {
            comparisons++;
            const isMatch = a[i] === target;
            states.push(this._state(a, i, isMatch, target, 'compare', 2,
                ar ? `مقارنة ${target} مع العنصر ${i} = ${a[i]}` : `Comparing ${target} with element ${i} = ${a[i]}`,
                comparisons, i));
            
            if (isMatch) {
                states.push(this._state(a, i, true, target, 'found', 3,
                    ar ? `✅ وُجد ${target} في الموضع ${i}` : `✅ Found ${target} at index ${i}`,
                    comparisons, i));
                return states;
            }
        }
        
        states.push(this._state(a, -1, false, target, 'not-found', 4,
            ar ? `❌ ${target} غير موجود في المصفوفة` : `❌ ${target} not found in array`,
            comparisons, -1));
        return states;
    }

    static binary(arr, target, lang) {
        const states = [], a = [...arr], n = a.length;
        let comparisons = 0;
        const ar = lang === 'ar';
        
        // Check if array is sorted
        const sorted = [...a].sort((x, y) => x - y);
        a.length = 0;
        a.push(...sorted);
        
        states.push(this._state(a, -1, false, target, 'initial', 0,
            ar ? `المصفوفة مرتبة. البحث الثنائي عن ${target}` : `Array sorted. Binary searching for ${target}`,
            0, -1));
        
        let left = 0, right = n - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            comparisons++;
            
            states.push(this._state(a, mid, false, target, 'check', 3,
                ar ? `left=${left}, right=${right}, mid=${mid}, arr[mid]=${a[mid]}` : `left=${left}, right=${right}, mid=${mid}, arr[mid]=${a[mid]}`,
                comparisons, mid));
            
            if (a[mid] === target) {
                states.push(this._state(a, mid, true, target, 'found', 5,
                    ar ? `✅ وُجد ${target} في الموضع ${mid}` : `✅ Found ${target} at index ${mid}`,
                    comparisons, mid));
                return states;
            }
            
            if (a[mid] < target) {
                states.push(this._state(a, mid, false, target, 'right', 7,
                    ar ? `${a[mid]} < ${target}، البحث في اليمين` : `${a[mid]} < ${target}, search right`,
                    comparisons, mid));
                left = mid + 1;
            } else {
                states.push(this._state(a, mid, false, target, 'left', 9,
                    ar ? `${a[mid]} > ${target}، البحث في اليسار` : `${a[mid]} > ${target}, search left`,
                    comparisons, mid));
                right = mid - 1;
            }
        }
        
        states.push(this._state(a, -1, false, target, 'not-found', 11,
            ar ? `❌ ${target} غير موجود في المصفوفة` : `❌ ${target} not found in array`,
            comparisons, -1));
        return states;
    }
}

/* ═══════════════════════════════════════════
   Linked List Engine
═══════════════════════════════════════════ */
class ListNode { constructor(v) { this.value = v; this.next = null; } }

class LinkedListEngine {
    constructor() { this.head = null; this.size = 0; }

    serialize() {
        const arr = [];
        let curr = this.head;
        while (curr) { arr.push(curr.value); curr = curr.next; }
        return arr;
    }

    _baseState(action, line, explanation, comparisons, steps, highlight, result) {
        return {
            list: this.serialize(), highlights: highlight || [],
            action, line, explanation, comparisons, steps, result,
            size: this.size
        };
    }

    generateInsertStates(value, lang) {
        const states = [], ar = lang === 'ar';
        let comparisons = 0, steps = 0;

        states.push({ ...this._baseState('initial', 0, ar ? `إدراج ${value}` : `Inserting ${value}`, 0, 0, [], '-') });

        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            states.push({ ...this._baseState('insert', 2, 
                ar ? `✅ تم إدراج ${value} كأول عنصر` : `✅ Inserted ${value} as first element`,
                comparisons, 1, [{idx: 0, color: 'success'}], value) });
            return states;
        }

        let current = this.head;
        let idx = 0;
        while (current.next) {
            comparisons++; steps++;
            states.push({ ...this._baseState('traverse', 3, 
                ar ? `التمرير للعقدة ${current.value}` : `Traversing to node ${current.value}`,
                comparisons, steps, [{idx, color: 'current'}], '-') });
            current = current.next;
            idx++;
        }

        current.next = newNode;
        this.size++;
        states.push({ ...this._baseState('insert', 5, 
            ar ? `✅ تم إدراج ${value} في نهاية القائمة` : `✅ Inserted ${value} at end of list`,
            comparisons, steps + 1, [{idx: idx, color: 'current'}, {idx: idx + 1, color: 'success'}], value) });

        return states;
    }

    generateSearchStates(value, lang) {
        const states = [], ar = lang === 'ar';
        let comparisons = 0, steps = 0;

        if (!this.head) {
            states.push({ ...this._baseState('not-found', 0, 
                ar ? '❌ القائمة فارغة' : '❌ List is empty', 0, 0, [], '❌') });
            return states;
        }

        states.push({ ...this._baseState('initial', 0, 
            ar ? `البحث عن ${value}` : `Searching for ${value}`, 0, 0, [], '-') });

        let current = this.head;
        let idx = 0;
        while (current) {
            comparisons++; steps++;
            const isMatch = current.value === value;
            states.push({ ...this._baseState('compare', 2, 
                ar ? `مقارنة ${value} مع ${current.value}` : `Comparing ${value} with ${current.value}`,
                comparisons, steps, [{idx, color: isMatch ? 'success' : 'comparing'}], isMatch ? value : '-') });

            if (isMatch) {
                states.push({ ...this._baseState('found', 3, 
                    ar ? `✅ وُجد ${value} في الموضع ${idx}` : `✅ Found ${value} at index ${idx}`,
                    comparisons, steps, [{idx, color: 'success'}], idx) });
                return states;
            }
            current = current.next;
            idx++;
        }

        states.push({ ...this._baseState('not-found', 4, 
            ar ? `❌ ${value} غير موجود` : `❌ ${value} not found`,
            comparisons, steps, [], '❌') });
        return states;
    }

    generateDeleteStates(value, lang) {
        const states = [], ar = lang === 'ar';
        let comparisons = 0, steps = 0;

        if (!this.head) {
            states.push({ ...this._baseState('not-found', 0, 
                ar ? '❌ القائمة فارغة' : '❌ List is empty', 0, 0, [], '❌') });
            return states;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            states.push({ ...this._baseState('delete', 2, 
                ar ? `✅ تم حذف ${value} من البداية` : `✅ Deleted ${value} from beginning`,
                comparisons, 1, [], '✅') });
            return states;
        }

        let current = this.head;
        let idx = 0;
        while (current.next) {
            comparisons++; steps++;
            if (current.next.value === value) {
                states.push({ ...this._baseState('found', 3, 
                    ar ? `وُجد ${value} بعد ${current.value}` : `Found ${value} after ${current.value}`,
                    comparisons, steps, [{idx, color: 'current'}, {idx: idx + 1, color: 'danger'}], '-') });

                current.next = current.next.next;
                this.size--;
                states.push({ ...this._baseState('delete', 5, 
                    ar ? `✅ تم حذف ${value}` : `✅ Deleted ${value}`,
                    comparisons, steps + 1, [], '✅') });
                return states;
            }
            current = current.next;
            idx++;
        }

        states.push({ ...this._baseState('not-found', 6, 
            ar ? `❌ ${value} غير موجود` : `❌ ${value} not found`,
            comparisons, steps, [], '❌') });
        return states;
    }

    generateInsertAtStates(pos, value, lang) {
        const states = [], ar = lang === 'ar';
        let comparisons = 0, steps = 0;

        states.push({ ...this._baseState('initial', 0, 
            ar ? `إدراج ${value} في الموضع ${pos}` : `Inserting ${value} at position ${pos}`,
            0, 0, [], '-') });

        if (pos < 0 || pos > this.size) {
            states.push({ ...this._baseState('error', 1, 
                ar ? `❌ موضع غير صالح` : `❌ Invalid position`,
                comparisons, 0, [], '❌') });
            return states;
        }

        const newNode = new ListNode(value);
        if (pos === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            states.push({ ...this._baseState('insert', 2, 
                ar ? `✅ تم إدراج ${value} في البداية` : `✅ Inserted ${value} at beginning`,
                comparisons, 1, [{idx: 0, color: 'success'}], value) });
            return states;
        }

        let current = this.head;
        let idx = 0;
        while (idx < pos - 1 && current) {
            comparisons++; steps++;
            states.push({ ...this._baseState('traverse', 3, 
                ar ? `التمرير للعقدة ${current.value}` : `Traversing to node ${current.value}`,
                comparisons, steps, [{idx, color: 'current'}], '-') });
            current = current.next;
            idx++;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        states.push({ ...this._baseState('insert', 5, 
            ar ? `✅ تم إدراج ${value} في الموضع ${pos}` : `✅ Inserted ${value} at position ${pos}`,
            comparisons, steps + 1, [{idx: pos - 1, color: 'current'}, {idx: pos, color: 'success'}], value) });

        return states;
    }
}

/* ═══════════════════════════════════════════
   Linked List Renderer
═══════════════════════════════════════════ */
class ListRenderer {
    static render(container, list, highlights = []) {
        if (!list || list.length === 0) {
            const t = TRANSLATIONS[app?.lang || 'ar'];
            container.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg><p>${t?.insertToBuild || 'Insert elements to build list'}</p></div>`;
            return;
        }

        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg');
        const width = Math.max(400, list.length * 100 + 100);
        const height = 150;
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.style.cssText = 'width:100%;height:100%;overflow:visible';

        list.forEach((val, i) => {
            const x = 50 + i * 100;
            const h = highlights.find(h => h.idx === i);
            const COLOR_MAP = { current: ['#2196F3', '#64B5F6'], comparing: ['#FFB800', '#FFD54F'],
                success: ['#00C853', '#69F0AE'], danger: ['#FF4757', '#FF6B6B'] };
            const [fill, stroke] = h ? (COLOR_MAP[h.color] || ['#0066FF', '#3385FF']) : ['#0066FF', '#3385FF'];

            // Node rectangle
            const rect = document.createElementNS(ns, 'rect');
            Object.entries({ x: x - 30, y: 40, width: 60, height: 50, rx: 8, fill, stroke, 'stroke-width': 3 })
                .forEach(([k, v]) => rect.setAttribute(k, v));
            svg.appendChild(rect);

            // Value text
            const text = document.createElementNS(ns, 'text');
            Object.entries({ x, y: 70, 'text-anchor': 'middle', fill: 'white',
                'font-size': '16', 'font-weight': '700', 'font-family': 'Inter,sans-serif' })
                .forEach(([k, v]) => text.setAttribute(k, v));
            text.textContent = val;
            svg.appendChild(text);

            // Index label
            const idxText = document.createElementNS(ns, 'text');
            Object.entries({ x, y: 110, 'text-anchor': 'middle', fill: '#A0AEC0',
                'font-size': '11', 'font-family': 'Inter,sans-serif' })
                .forEach(([k, v]) => idxText.setAttribute(k, v));
            idxText.textContent = i;
            svg.appendChild(idxText);

            // Arrow to next
            if (i < list.length - 1) {
                const arrow = document.createElementNS(ns, 'line');
                Object.entries({ x1: x + 30, y1: 65, x2: x + 60, y2: 65,
                    stroke: 'rgba(255,255,255,0.4)', 'stroke-width': '2', 'marker-end:': 'url(#arrow)' })
                    .forEach(([k, v]) => arrow.setAttribute(k, v));
                svg.appendChild(arrow);
            }
        });

        // Add defs for arrow marker
        const defs = document.createElementNS(ns, 'defs');
        const marker = document.createElementNS(ns, 'marker');
        marker.setAttribute('id', 'arrow');
        marker.setAttribute('markerWidth', '10');
        marker.setAttribute('markerHeight', '10');
        marker.setAttribute('refX', '9');
        marker.setAttribute('refY', '3');
        marker.setAttribute('orient', 'auto');
        const markerPath = document.createElementNS(ns, 'path');
        markerPath.setAttribute('d', 'M0,0 L0,6 L9,3 z');
        markerPath.setAttribute('fill', 'rgba(255,255,255,0.4)');
        marker.appendChild(markerPath);
        defs.appendChild(marker);
        svg.appendChild(defs);

        container.innerHTML = '';
        container.appendChild(svg);
    }
}

/* ═══════════════════════════════════════════
   Stack/Queue Engine
═══════════════════════════════════════════ */
class StackEngine {
    constructor() { this.items = []; this.isQueue = false; }

    _baseState(action, line, explanation, steps, highlight, result) {
        return {
            items: [...this.items], action, line, explanation, steps,
            highlight: highlight || [], result, size: this.items.length,
            top: this.items.length > 0 ? this.items[this.items.length - 1] : null
        };
    }

    generatePushStates(value, lang) {
        const states = [], ar = lang === 'ar';
        states.push({ ...this._baseState('initial', 0, 
            ar ? `دفع ${value} إلى ${this.isQueue ? 'الطابور' : 'المكدس'}` : `Pushing ${value} to ${this.isQueue ? 'queue' : 'stack'}`,
            0, [], '-') });

        this.items.push(value);
        states.push({ ...this._baseState('push', 2, 
            ar ? `✅ تم دفع ${value}` : `✅ Pushed ${value}`,
            1, [this.items.length - 1], value) });
        return states;
    }

    generatePopStates(lang) {
        const states = [], ar = lang === 'ar';
        if (this.items.length === 0) {
            states.push({ ...this._baseState('empty', 0, 
                ar ? '❌ فارغ' : '❌ Empty', 0, [], '❌') });
            return states;
        }

        const value = this.items.pop();
        states.push({ ...this._baseState('pop', 2, 
            ar ? `✅ تم سحب ${value}` : `✅ Popped ${value}`,
            1, [], value) });
        return states;
    }

    generatePeekStates(lang) {
        const states = [], ar = lang === 'ar';
        if (this.items.length === 0) {
            states.push({ ...this._baseState('empty', 0, 
                ar ? '❌ فارغ' : '❌ Empty', 0, [], '❌') });
            return states;
        }

        const value = this.items[this.items.length - 1];
        states.push({ ...this._baseState('peek', 2, 
            ar ? `القمة = ${value}` : `Top = ${value}`,
            1, [this.items.length - 1], value) });
        return states;
    }
}

/* ═══════════════════════════════════════════
   Stack Renderer
═══════════════════════════════════════════ */
class StackRenderer {
    static render(container, items, highlight = [], isQueue = false) {
        if (items.length === 0) {
            const t = TRANSLATIONS[app?.lang || 'ar'];
            container.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg><p>${t?.empty || 'Empty'}</p></div>`;
            return;
        }

        if (isQueue) {
            this._renderQueue(container, items, highlight);
        } else {
            this._renderStack(container, items, highlight);
        }
    }

    static _renderStack(container, items, highlight) {
        const maxVal = Math.max(...items, 1);
        container.innerHTML = items.map((val, i) => {
            const h = highlight.includes(i);
            const height = Math.max(20, Math.round((val / maxVal) * 100));
            return `<div class="stack-item ${h ? 'highlight' : ''}" style="height:${height}px">
                <span class="stack-value">${val}</span>
                <span class="stack-index">${i}</span>
            </div>`;
        }).join('');
    }

    static _renderQueue(container, items, highlight) {
        container.innerHTML = `<div class="queue-container">` + 
            items.map((val, i) => {
                const h = highlight.includes(i);
                return `<div class="queue-item ${h ? 'highlight' : ''}">
                    <span class="queue-value">${val}</span>
                    <span class="queue-index">${i}</span>
                </div>`;
            }).join('') + `</div>`;
    }
}

/* ═══════════════════════════════════════════
   Graph Engine
═══════════════════════════════════════════ */
class GraphEngine {
    constructor() { this.adjList = new Map(); this.nodes = new Set(); this.edges = 0; }

    addEdge(u, v) {
        if (!this.adjList.has(u)) this.adjList.set(u, []);
        if (!this.adjList.has(v)) this.adjList.set(v, []);
        this.adjList.get(u).push(v);
        this.adjList.get(v).push(u);
        this.nodes.add(u); this.nodes.add(v);
        this.edges++;
    }

    clear() { this.adjList.clear(); this.nodes.clear(); this.edges = 0; }

    _baseState(action, line, explanation, visited, queue, steps, result) {
        return {
            adjList: new Map(this.adjList), visited: new Set(visited),
            queue: [...queue], action, line, explanation, steps, result,
            nodeCount: this.nodes.size, edgeCount: this.edges
        };
    }

    generateBFS(start, lang) {
        const states = [], ar = lang === 'ar';
        const visited = new Set();
        const queue = [start];
        visited.add(start);
        let steps = 0;

        if (!this.nodes.has(start)) {
            states.push({ ...this._baseState('error', 0, 
                ar ? `❌ العقدة ${start} غير موجودة` : `❌ Node ${start} not found`,
                new Set(), [], 0, '❌') });
            return states;
        }

        states.push({ ...this._baseState('initial', 0, 
            ar ? `بدء BFS من العقدة ${start}` : `Starting BFS from node ${start}`,
            new Set([start]), [start], 0, start) });

        while (queue.length > 0) {
            const node = queue.shift();
            steps++;
            
            const neighbors = this.adjList.get(node) || [];
            states.push({ ...this._baseState('visit', 3, 
                ar ? `زارت العقدة ${node}، الجيران: [${neighbors.join(', ')}]` : `Visiting node ${node}, neighbors: [${neighbors.join(', ')}]`,
                new Set(visited), [...queue], steps, node) });

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    states.push({ ...this._baseState('enqueue', 5, 
                        ar ? `إضافة الجار ${neighbor} للطابور` : `Enqueue neighbor ${neighbor}`,
                        new Set(visited), [...queue], steps, neighbor) });
                }
            }
        }

        states.push({ ...this._baseState('complete', 7, 
            ar ? `✅ اكتمل BFS. الزوار: ${[...visited].join(' → ')}` : `✅ BFS complete. Visited: ${[...visited].join(' → ')}`,
            new Set(visited), [], steps, [...visited].join(' → ')) });

        return states;
    }

    generateDFS(start, lang) {
        const states = [], ar = lang === 'ar';
        const visited = new Set();
        const stack = [start];
        visited.add(start);
        let steps = 0;

        if (!this.nodes.has(start)) {
            states.push({ ...this._baseState('error', 0, 
                ar ? `❌ العقدة ${start} غير موجودة` : `❌ Node ${start} not found`,
                new Set(), [], 0, '❌') });
            return states;
        }

        states.push({ ...this._baseState('initial', 0, 
            ar ? `بدء DFS من العقدة ${start}` : `Starting DFS from node ${start}`,
            new Set([start]), [start], 0, start) });

        while (stack.length > 0) {
            const node = stack.pop();
            steps++;

            const neighbors = this.adjList.get(node) || [];
            states.push({ ...this._baseState('visit', 3, 
                ar ? `زارت العقدة ${node}، الجيران: [${neighbors.join(', ')}]` : `Visiting node ${node}, neighbors: [${neighbors.join(', ')}]`,
                new Set(visited), [...stack], steps, node) });

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    stack.push(neighbor);
                    states.push({ ...this._baseState('push', 5, 
                        ar ? `دفع الجار ${neighbor} للمكدس` : `Push neighbor ${neighbor} to stack`,
                        new Set(visited), [...stack], steps, neighbor) });
                }
            }
        }

        states.push({ ...this._baseState('complete', 7, 
            ar ? `✅ اكتمل DFS. الزوار: ${[...visited].join(' → ')}` : `✅ DFS complete. Visited: ${[...visited].join(' → ')}`,
            new Set(visited), [], steps, [...visited].join(' → ')) });

        return states;
    }
}

/* ═══════════════════════════════════════════
   Graph Renderer
═══════════════════════════════════════════ */
class GraphRenderer {
    static render(container, adjList, visited, current, isQueue = false) {
        const nodes = [...adjList.keys()];
        if (nodes.length === 0) {
            const t = TRANSLATIONS[app?.lang || 'ar'];
            container.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true"><path d="M12 22c4.97 0 9-2.24 9-5V7c0-2.76-4.03-5-9-5S3 4.24 3 7v10c0 2.76 4.03 5 9 5z"/></svg><p>${t?.buildGraphFirst || 'Build a graph to start'}</p></div>`;
            return;
        }

        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg');
        
        // Circular layout
        const centerX = 300, centerY = 250, radius = Math.min(180, 40 * nodes.length);
        const positions = new Map();
        
        nodes.forEach((node, i) => {
            const angle = (2 * Math.PI * i) / nodes.length - Math.PI / 2;
            positions.set(node, {
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle)
            });
        });

        // Calculate viewBox
        let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
        positions.forEach(p => {
            minX = Math.min(minX, p.x - 50);
            maxX = Math.max(maxX, p.x + 50);
            minY = Math.min(minY, p.y - 50);
            maxY = Math.max(maxY, p.y + 50);
        });
        svg.setAttribute('viewBox', `${minX} ${minY} ${maxX - minX} ${maxY - minY}`);
        svg.style.cssText = 'width:100%;height:100%;overflow:visible';

        // Draw edges first
        const drawnEdges = new Set();
        adjList.forEach((neighbors, node) => {
            const from = positions.get(node);
            neighbors.forEach(neighbor => {
                const to = positions.get(neighbor);
                const edgeKey = [node, neighbor].sort().join('-');
                if (!drawnEdges.has(edgeKey)) {
                    drawnEdges.add(edgeKey);
                    const line = document.createElementNS(ns, 'line');
                    const isVisited = visited.has(node) && visited.has(neighbor);
                    Object.entries({
                        x1: from.x, y1: from.y, x2: to.x, y2: to.y,
                        stroke: isVisited ? 'rgba(0,212,170,0.6)' : 'rgba(255,255,255,0.2)',
                        'stroke-width': '2'
                    }).forEach(([k, v]) => line.setAttribute(k, v));
                    svg.appendChild(line);
                }
            });
        });

        // Draw nodes
        nodes.forEach(node => {
            const pos = positions.get(node);
            const isVisited = visited.has(node);
            const isCurrent = current === node;
            
            let fill = '#0066FF', stroke = '#3385FF';
            if (isCurrent) { fill = '#FFB800'; stroke = '#FFD54F'; }
            else if (isVisited) { fill = '#00C853'; stroke = '#69F0AE'; }

            // Glow
            if (isVisited || isCurrent) {
                const glow = document.createElementNS(ns, 'circle');
                Object.entries({ cx: pos.x, cy: pos.y, r: 35, fill: 'none', stroke: fill, 'stroke-width': 2, opacity: 0.3 })
                    .forEach(([k, v]) => glow.setAttribute(k, v));
                svg.appendChild(glow);
            }

            const circle = document.createElementNS(ns, 'circle');
            Object.entries({ cx: pos.x, cy: pos.y, r: 25, fill, stroke, 'stroke-width': 3 })
                .forEach(([k, v]) => circle.setAttribute(k, v));
            svg.appendChild(circle);

            const text = document.createElementNS(ns, 'text');
            Object.entries({ x: pos.x, y: pos.y + 5, 'text-anchor': 'middle', fill: 'white',
                'font-size': '14', 'font-weight': '700', 'font-family': 'Inter,sans-serif' })
                .forEach(([k, v]) => text.setAttribute(k, v));
            text.textContent = node;
            svg.appendChild(text);
        });

        container.innerHTML = '';
        container.appendChild(svg);
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
        this.currentSearch   = 'linear';
        this.currentTreeOp   = 'bst-insert';
        this.currentListOp   = 'll-insert';
        this.stackMode       = 'stack'; // 'stack' or 'queue'
        this.currentGraphAlgo = 'bfs';
        this.sortingStates   = new StateManager();
        this.treeStates      = new StateManager();
        this.searchStates    = new StateManager();
        this.listStates     = new StateManager();
        this.stackStates    = new StateManager();
        this.graphStates    = new StateManager();
        this.bst             = new BSTEngine();
        this.linkedList      = new LinkedListEngine();
        this.stackEngine     = new StackEngine();
        this.graphEngine     = new GraphEngine();
        this.sortingPlaying  = false;
        this.treePlaying     = false;
        this.searchPlaying   = false;
        this.listPlaying     = false;
        this.stackPlaying   = false;
        this.graphPlaying   = false;
        this.sortingTimer    = null;
        this.treeTimer       = null;
        this.searchTimer     = null;
        this.listTimer       = null;
        this.stackTimer      = null;
        this.graphTimer      = null;
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

    /* ═══════════════════════════════════════════
       SEARCHING METHODS
    ═══════════════════════════════════════════ */
    generateSearchArray() {
        const size = Math.min(30, Math.max(3, parseInt(document.getElementById('searchArraySize').value) || 12));
        const arr = Array.from({ length: size }, () => Math.floor(Math.random() * 50) + 1);
        arr.sort((a, b) => a - b);
        document.getElementById('searchArrayInput').value = arr.join(', ');
        this._renderSearchBars(arr);
        showToast(TRANSLATIONS[this.lang].generated, 'success');
    }

    _parseSearchArray(silent = false) {
        const raw = document.getElementById('searchArrayInput').value.trim();
        if (!raw) { if (!silent) showToast(TRANSLATIONS[this.lang].errEnterData, 'error'); return null; }
        const arr = raw.split(',').map(v => parseInt(v.trim(), 10)).filter(v => Number.isFinite(v));
        if (arr.length < 2) { if (!silent) showToast(TRANSLATIONS[this.lang].errMinElements, 'error'); return null; }
        return arr.slice(0, 30);
    }

    _renderSearchBars(arr, state = null) {
        const container = document.getElementById('searchBarsContainer');
        const max = Math.max(...arr);
        container.innerHTML = arr.map((val, i) => {
            const classes = ['bar'];
            if (state) {
                if (state.current === i) classes.push('comparing');
                if (state.found && state.index === i) classes.push('sorted');
            }
            const heightPct = Math.max(2, Math.round((val / max) * 100));
            return `<div class="${classes.join(' ')}" style="height:${heightPct}%" aria-label="${val}"><span class="bar-value">${val}</span></div>`;
        }).join('');
    }

    _renderSearchLegend() {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('searchingLegend').innerHTML = `
            <div class="legend-item"><div class="legend-dot" style="background:var(--primary)"></div><span>${t.default}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--warning)"></div><span>${t.comparing}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--success)"></div><span>${t.successNode}</span></div>`;
    }

    _setSearchHeader(algo) {
        const t = TRANSLATIONS[this.lang];
        const title = algo.id === 'linear' ? 'Linear Search' : 'Binary Search';
        document.getElementById('searchingTitle').textContent = title;
        document.getElementById('searchingSubtitle').textContent = t[algo.id + 'Search'] || algo.id;
        document.getElementById('searchingBadges').innerHTML = `
            <div class="page-badge">${t.best}: ${algo.timeBest}</div>
            <div class="page-badge">${t.avg}: ${algo.timeAvg}</div>
            <div class="page-badge">${t.worst}: ${algo.timeWorst}</div>`;
    }

    openSearch(id, doNavigate = true) {
        this.currentSearch = id;
        const algo = ALGORITHMS.searching.find(a => a.id === id);
        if (!algo) return;
        this._setSearchHeader(algo);
        this._renderPseudoCode('searchPseudoCode', algo.pseudoCode);
        this._renderSearchLegend();
        if (doNavigate) { this.navigate('searching'); this.resetSearch(); }
    }

    startSearch() {
        const arr = this._parseSearchArray();
        if (!arr) return;
        const target = parseInt(document.getElementById('searchTarget').value, 10);
        if (!Number.isFinite(target)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        
        this.stopSearch();
        this.searchStates.reset();
        
        const states = this.currentSearch === 'linear' 
            ? SearchEngine.linear(arr, target, this.lang)
            : SearchEngine.binary(arr, target, this.lang);
        
        states.forEach(s => this.searchStates.addState(s));
        this._enableSearchControls(true);
        this.searchStates.index = -1;
        this.searchNextStep();
        showToast(`${TRANSLATIONS[this.lang].steps}: ${this.searchStates.total}`, 'info');
    }

    _renderSearchState(state) {
        if (!state) return;
        this._renderSearchBars(state.array, state);
        this._highlightLine('searchPseudoCode', state.line);

        const t = TRANSLATIONS[this.lang];
        const BADGE_CLASS = { compare:'compare', check:'compare', found:'complete', 'not-found':'delete', initial:'initial', right:'search', left:'search' };
        const BADGE_LABEL = { compare: t.comparing, check: t.comparing, found:'✅', 'not-found':'❌', initial: t.default, right: t.searching, left: t.searching };
        const badge = state.action ? `<span class="action-badge ${BADGE_CLASS[state.action]||''}">${BADGE_LABEL[state.action]||state.action}</span>` : '';
        
        let resultText = '-';
        if (state.action === 'found') resultText = state.index;
        else if (state.action === 'not-found') resultText = '❌';
        
        document.getElementById('searchStepExplanation').innerHTML = `${badge}<p style="font-weight:600;margin-top:8px">${_escapeHtml(state.explanation)}</p>`;
        document.getElementById('searchStatComparisons').textContent = state.comparisons;
        document.getElementById('searchStatSteps').textContent = this.searchStates.index + 1;
        document.getElementById('searchStatFound').textContent = resultText;
        document.getElementById('searchStepDisplay').textContent = `${this.searchStates.index + 1} / ${this.searchStates.total}`;
        document.getElementById('searchPrevBtn').disabled = !this.searchStates.hasPrev;
        document.getElementById('searchNextBtn').disabled = !this.searchStates.hasNext;
        if (state.action === 'found' && !this.searchStates.hasNext) this.stopSearch();
    }

    searchNextStep() {
        const state = this.searchStates.next();
        if (state) this._renderSearchState(state); else this.stopSearch();
    }

    searchPrevStep() {
        const state = this.searchStates.prev();
        if (state) this._renderSearchState(state);
    }

    toggleSearchPlay() {
        if (this.searchPlaying) this.stopSearch(); else this._startSearchAutoPlay();
    }

    _startSearchAutoPlay() {
        if (!this.searchStates.total) return;
        this.searchPlaying = true;
        document.getElementById('searchPlayBtn').innerHTML = _pauseIcon();
        const tick = () => {
            if (!this.searchStates.hasNext) { this.stopSearch(); return; }
            this.searchNextStep();
            if (this.searchPlaying) this.searchTimer = setTimeout(tick, this._speed('searchSpeedSlider'));
        };
        tick();
    }

    stopSearch() {
        this.searchPlaying = false;
        if (this.searchTimer) { clearTimeout(this.searchTimer); this.searchTimer = null; }
        const btn = document.getElementById('searchPlayBtn');
        if (btn) btn.innerHTML = _playIcon();
    }

    resetSearch() {
        this.stopSearch();
        this.searchStates.reset();
        this._enableSearchControls(false);
        const t = TRANSLATIONS[this.lang];
        document.getElementById('searchStepExplanation').innerHTML = `<p>${t.clickStartToSearch}</p>`;
        document.getElementById('searchStatComparisons').textContent = '0';
        document.getElementById('searchStatSteps').textContent = '0';
        document.getElementById('searchStatFound').textContent = '-';
        document.getElementById('searchStepDisplay').textContent = '0 / 0';
        this._highlightLine('searchPseudoCode', -1);
        const arr = this._parseSearchArray(true);
        if (arr) this._renderSearchBars(arr);
    }

    _enableSearchControls(on) {
        document.getElementById('searchPlayBtn').disabled = !on;
        document.getElementById('searchNextBtn').disabled = !on;
        document.getElementById('searchPrevBtn').disabled = true;
    }

    /* ═══════════════════════════════════════════
       LINKED LIST METHODS
    ═══════════════════════════════════════════ */
    _renderListLegend() {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('listLegend').innerHTML = `
            <div class="legend-item"><div class="legend-dot" style="background:var(--primary)"></div><span>${t.normalNode}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:#2196F3"></div><span>${t.currentNode}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--success)"></div><span>${t.successNode}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--danger)"></div><span>${t.deleteNode}</span></div>`;
    }

    listInsert() {
        const v = parseInt(document.getElementById('listInsertInput').value, 10);
        if (!Number.isFinite(v)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        
        this.stopList(); this.listStates.reset();
        this.linkedList.generateInsertStates(v, this.lang).forEach(s => this.listStates.addState(s));
        this._enableListControls(true);
        this.listStates.index = -1;
        this.listNextStep();
    }

    listSearch() {
        const v = parseInt(document.getElementById('listSearchInput').value, 10);
        if (!Number.isFinite(v)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        
        this.stopList(); this.listStates.reset();
        this.linkedList.generateSearchStates(v, this.lang).forEach(s => this.listStates.addState(s));
        this._enableListControls(true);
        this.listStates.index = -1;
        this.listNextStep();
    }

    listDelete() {
        const v = parseInt(document.getElementById('listDeleteInput').value, 10);
        if (!Number.isFinite(v)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        
        this.stopList(); this.listStates.reset();
        this.linkedList.generateDeleteStates(v, this.lang).forEach(s => this.listStates.addState(s));
        this._enableListControls(true);
        this.listStates.index = -1;
        this.listNextStep();
    }

    listInsertAt() {
        const pos = parseInt(document.getElementById('listPosInput').value, 10);
        const v = parseInt(document.getElementById('listValInput').value, 10);
        if (!Number.isFinite(pos) || !Number.isFinite(v)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        
        this.stopList(); this.listStates.reset();
        this.linkedList.generateInsertAtStates(pos, v, this.lang).forEach(s => this.listStates.addState(s));
        this._enableListControls(true);
        this.listStates.index = -1;
        this.listNextStep();
    }

    clearList() {
        this.stopList(); this.listStates.reset();
        this.linkedList = new LinkedListEngine();
        this._enableListControls(false);
        const t = TRANSLATIONS[this.lang];
        document.getElementById('listCanvas').innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg><p>${t.insertToBuild}</p></div>`;
        document.getElementById('listStepExplanation').innerHTML = `<p>${t.performOperation}</p>`;
        ['listStatNodes','listStatComparisons','listStatSteps','listStatResult'].forEach(id => document.getElementById(id).textContent = '0');
        document.getElementById('listStepDisplay').textContent = '0 / 0';
        this._highlightLine('listPseudoCode', -1);
        showToast(t.listCleared, 'info');
    }

    _renderListState(state) {
        if (!state) return;
        const canvas = document.getElementById('listCanvas');
        ListRenderer.render(canvas, state.list, state.highlights);
        this._highlightLine('listPseudoCode', state.line);

        const t = TRANSLATIONS[this.lang];
        const BADGE_CLASS = { compare:'compare', insert:'insert', delete:'delete', search:'search', traverse:'search', found:'complete', 'not-found':'delete', initial:'initial' };
        const BADGE_LABEL = { compare: t.comparing, insert: t.inserting, delete: t.deleting, search: t.searching, traverse: t.searching, found: '✅', 'not-found':'❌', initial: t.default };
        const badge = state.action ? `<span class="action-badge ${BADGE_CLASS[state.action]||''}">${BADGE_LABEL[state.action]||state.action}</span>` : '';

        document.getElementById('listStepExplanation').innerHTML = `${badge}<p style="font-weight:600;margin-top:8px">${_escapeHtml(state.explanation)}</p>`;
        document.getElementById('listStatNodes').textContent = state.size;
        document.getElementById('listStatComparisons').textContent = state.comparisons;
        document.getElementById('listStatSteps').textContent = state.steps;
        document.getElementById('listStatResult').textContent = state.result;
        document.getElementById('listStepDisplay').textContent = `${this.listStates.index + 1} / ${this.listStates.total}`;
        document.getElementById('listPrevBtn').disabled = !this.listStates.hasPrev;
        document.getElementById('listNextBtn').disabled = !this.listStates.hasNext;
        if (state.action === 'found' || state.action === 'delete' || state.action === 'not-found') this.stopList();
    }

    listNextStep() {
        const state = this.listStates.next();
        if (state) this._renderListState(state); else this.stopList();
    }

    listPrevStep() {
        const state = this.listStates.prev();
        if (state) this._renderListState(state);
    }

    toggleListPlay() {
        if (this.listPlaying) this.stopList(); else this._startListAutoPlay();
    }

    _startListAutoPlay() {
        if (!this.listStates.total) return;
        this.listPlaying = true;
        document.getElementById('listPlayBtn').innerHTML = _pauseIcon();
        const tick = () => {
            if (!this.listStates.hasNext) { this.stopList(); return; }
            this.listNextStep();
            if (this.listPlaying) this.listTimer = setTimeout(tick, this._speed('listSpeedSlider'));
        };
        tick();
    }

    stopList() {
        this.listPlaying = false;
        if (this.listTimer) { clearTimeout(this.listTimer); this.listTimer = null; }
        const btn = document.getElementById('listPlayBtn');
        if (btn) btn.innerHTML = _playIcon();
    }

    resetList() {
        this.stopList(); this.listStates.reset();
        this._enableListControls(false);
        const t = TRANSLATIONS[this.lang];
        document.getElementById('listStepExplanation').innerHTML = `<p>${t.performOperation}</p>`;
        ['listStatComparisons','listStatSteps','listStatResult'].forEach(id => document.getElementById(id).textContent = '0');
        document.getElementById('listStatNodes').textContent = this.linkedList.size;
        document.getElementById('listStepDisplay').textContent = '0 / 0';
        this._highlightLine('listPseudoCode', -1);
        const canvas = document.getElementById('listCanvas');
        if (this.linkedList.size > 0) ListRenderer.render(canvas, this.linkedList.serialize());
        else canvas.innerHTML = `<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg><p>${t.insertToBuild}</p></div>`;
    }

    _enableListControls(on) {
        document.getElementById('listPlayBtn').disabled = !on;
        document.getElementById('listNextBtn').disabled = !on;
        document.getElementById('listPrevBtn').disabled = true;
    }

    /* ═══════════════════════════════════════════
       STACK/QUEUE METHODS
    ═══════════════════════════════════════════ */
    toggleStackQueue() {
        this.stackMode = this.stackMode === 'stack' ? 'queue' : 'stack';
        const t = TRANSLATIONS[this.lang];
        document.getElementById('stackQueueToggle').textContent = 
            this.stackMode === 'stack' ? t.switchToQueue : t.switchToStack;
        document.getElementById('stackTitle').textContent = this.stackMode === 'stack' ? 'Stack' : 'Queue';
        document.getElementById('stackSubtitle').textContent = this.stackMode === 'stack' ? 'المكدس (LIFO)' : 'الطابور (FIFO)';
        this.stackEngine.isQueue = this.stackMode === 'queue';
        this._renderStackLegend();
        this.resetStack();
    }

    _renderStackLegend() {
        const t = TRANSLATIONS[this.lang];
        const mode = this.stackMode === 'stack' ? t.stack : t.queue;
        document.getElementById('stackLegend').innerHTML = `
            <div class="legend-item"><div class="legend-dot" style="background:var(--primary)"></div><span>${t.default}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--success)"></div><span>${mode}</span></div>`;
    }

    stackPush() {
        const v = parseInt(document.getElementById('stackInput').value, 10);
        if (!Number.isFinite(v)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        
        this.stopStack(); this.stackStates.reset();
        this.stackEngine.generatePushStates(v, this.lang).forEach(s => this.stackStates.addState(s));
        this._enableStackControls(true);
        this.stackStates.index = -1;
        this.stackNextStep();
    }

    stackPop() {
        this.stopStack(); this.stackStates.reset();
        this.stackEngine.generatePopStates(this.lang).forEach(s => this.stackStates.addState(s));
        this._enableStackControls(true);
        this.stackStates.index = -1;
        this.stackNextStep();
    }

    stackPeek() {
        this.stopStack(); this.stackStates.reset();
        this.stackEngine.generatePeekStates(this.lang).forEach(s => this.stackStates.addState(s));
        this._enableStackControls(true);
        this.stackStates.index = -1;
        this.stackNextStep();
    }

    clearStack() {
        this.stopStack(); this.stackStates.reset();
        this.stackEngine = new StackEngine();
        this.stackEngine.isQueue = this.stackMode === 'queue';
        this._enableStackControls(false);
        const t = TRANSLATIONS[this.lang];
        document.getElementById('stackContainer').innerHTML = '';
        document.getElementById('stackStepExplanation').innerHTML = `<p>${t.performStackOp}</p>`;
        ['stackStatSize','stackStatTop','stackStatSteps','stackStatResult'].forEach(id => document.getElementById(id).textContent = '0');
        document.getElementById('stackStepDisplay').textContent = '0 / 0';
        this._highlightLine('stackPseudoCode', -1);
        showToast(t.stackCleared, 'info');
    }

    _renderStackState(state) {
        if (!state) return;
        const container = document.getElementById('stackContainer');
        StackRenderer.render(container, state.items, state.highlight || [], this.stackMode === 'queue');
        this._highlightLine('stackPseudoCode', state.line);

        const t = TRANSLATIONS[this.lang];
        const BADGE_CLASS = { push:'insert', pop:'delete', peek:'search', initial:'initial', empty:'delete' };
        const BADGE_LABEL = { push: t.inserting, pop: t.deleting, peek: t.searching, initial: t.default, empty: '❌' };
        const badge = state.action ? `<span class="action-badge ${BADGE_CLASS[state.action]||''}">${BADGE_LABEL[state.action]||state.action}</span>` : '';

        document.getElementById('stackStepExplanation').innerHTML = `${badge}<p style="font-weight:600;margin-top:8px">${_escapeHtml(state.explanation)}</p>`;
        document.getElementById('stackStatSize').textContent = state.size;
        document.getElementById('stackStatTop').textContent = state.top !== null ? state.top : '-';
        document.getElementById('stackStatSteps').textContent = state.steps;
        document.getElementById('stackStatResult').textContent = state.result;
        document.getElementById('stackStepDisplay').textContent = `${this.stackStates.index + 1} / ${this.stackStates.total}`;
        document.getElementById('stackPrevBtn').disabled = !this.stackStates.hasPrev;
        document.getElementById('stackNextBtn').disabled = !this.stackStates.hasNext;
    }

    stackNextStep() {
        const state = this.stackStates.next();
        if (state) this._renderStackState(state); else this.stopStack();
    }

    stackPrevStep() {
        const state = this.stackStates.prev();
        if (state) this._renderStackState(state);
    }

    toggleStackPlay() {
        if (this.stackPlaying) this.stopStack(); else this._startStackAutoPlay();
    }

    _startStackAutoPlay() {
        if (!this.stackStates.total) return;
        this.stackPlaying = true;
        document.getElementById('stackPlayBtn').innerHTML = _pauseIcon();
        const tick = () => {
            if (!this.stackStates.hasNext) { this.stopStack(); return; }
            this.stackNextStep();
            if (this.stackPlaying) this.stackTimer = setTimeout(tick, this._speed('stackSpeedSlider'));
        };
        tick();
    }

    stopStack() {
        this.stackPlaying = false;
        if (this.stackTimer) { clearTimeout(this.stackTimer); this.stackTimer = null; }
        const btn = document.getElementById('stackPlayBtn');
        if (btn) btn.innerHTML = _playIcon();
    }

    resetStack() {
        this.stopStack(); this.stackStates.reset();
        this._enableStackControls(false);
        const t = TRANSLATIONS[this.lang];
        document.getElementById('stackStepExplanation').innerHTML = `<p>${t.performStackOp}</p>`;
        ['stackStatSteps','stackStatResult'].forEach(id => document.getElementById(id).textContent = '0');
        document.getElementById('stackStatSize').textContent = this.stackEngine.items.length;
        document.getElementById('stackStatTop').textContent = this.stackEngine.items.length > 0 ? this.stackEngine.items[this.stackEngine.items.length - 1] : '-';
        document.getElementById('stackStepDisplay').textContent = '0 / 0';
        this._highlightLine('stackPseudoCode', -1);
        const container = document.getElementById('stackContainer');
        StackRenderer.render(container, this.stackEngine.items, [], this.stackMode === 'queue');
    }

    _enableStackControls(on) {
        document.getElementById('stackPlayBtn').disabled = !on;
        document.getElementById('stackNextBtn').disabled = !on;
        document.getElementById('stackPrevBtn').disabled = true;
    }

    /* ═══════════════════════════════════════════
       GRAPH METHODS
    ═══════════════════════════════════════════ */
    toggleGraphAlgo() {
        this.currentGraphAlgo = this.currentGraphAlgo === 'bfs' ? 'dfs' : 'bfs';
        const t = TRANSLATIONS[this.lang];
        document.getElementById('graphAlgoToggle').textContent = this.currentGraphAlgo.toUpperCase();
        document.getElementById('graphTitle').textContent = this.currentGraphAlgo === 'bfs' ? 'BFS' : 'DFS';
        document.getElementById('graphSubtitle').textContent = this.currentGraphAlgo === 'bfs' ? 'البحث بالعرض أولاً' : 'البحث بالعمق أولاً';
    }

    buildGraph() {
        const raw = document.getElementById('graphEdgesInput').value.trim();
        if (!raw) { showToast(TRANSLATIONS[this.lang].errEnterData, 'error'); return; }
        
        this.graphEngine.clear();
        const edges = raw.split(',').map(e => e.trim().split('-').map(n => parseInt(n, 10)));
        edges.forEach(([u, v]) => {
            if (Number.isFinite(u) && Number.isFinite(v)) this.graphEngine.addEdge(u, v);
        });
        
        this._renderGraph();
        this.resetGraph();
        showToast(TRANSLATIONS[this.lang].graphBuilt, 'success');
    }

    generateSampleGraph() {
        document.getElementById('graphEdgesInput').value = '1-2, 1-3, 2-4, 2-5, 3-6, 3-7, 4-8, 5-9, 6-10, 7-11';
        this.buildGraph();
    }

    _renderGraph(state = null) {
        const container = document.getElementById('graphCanvas');
        const visited = state?.visited || new Set();
        const current = state?.result;
        
        GraphRenderer.render(
            container, 
            this.graphEngine.adjList, 
            visited, 
            current,
            this.currentGraphAlgo === 'bfs'
        );
    }

    _renderGraphLegend() {
        const t = TRANSLATIONS[this.lang];
        document.getElementById('graphLegend').innerHTML = `
            <div class="legend-item"><div class="legend-dot" style="background:var(--primary)"></div><span>${t.default}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--warning)"></div><span>${t.currentNode}</span></div>
            <div class="legend-item"><div class="legend-dot" style="background:var(--success)"></div><span>${t.visited}</span></div>`;
    }

    startGraphTraversal() {
        const start = parseInt(document.getElementById('graphStartNode').value, 10);
        if (!Number.isFinite(start)) { showToast(TRANSLATIONS[this.lang].errEnterNumber, 'error'); return; }
        
        this.stopGraph(); this.graphStates.reset();
        
        const algo = ALGORITHMS.graph.find(a => a.id === this.currentGraphAlgo);
        if (!algo) return;
        
        const states = this.currentGraphAlgo === 'bfs'
            ? this.graphEngine.generateBFS(start, this.lang)
            : this.graphEngine.generateDFS(start, this.lang);
        
        states.forEach(s => this.graphStates.addState(s));
        this._renderPseudoCode('graphPseudoCode', algo.pseudoCode);
        this._renderGraphLegend();
        this._enableGraphControls(true);
        this.graphStates.index = -1;
        this.graphNextStep();
    }

    _renderGraphState(state) {
        if (!state) return;
        this._renderGraph(state);
        this._highlightLine('graphPseudoCode', state.line);

        const t = TRANSLATIONS[this.lang];
        const BADGE_CLASS = { visit:'search', enqueue:'insert', push:'insert', complete:'complete', initial:'initial', error:'delete' };
        const BADGE_LABEL = { visit: t.searching, enqueue: t.inserting, push: t.inserting, complete: '✅', initial: t.default, error: '❌' };
        const badge = state.action ? `<span class="action-badge ${BADGE_CLASS[state.action]||''}">${BADGE_LABEL[state.action]||state.action}</span>` : '';

        document.getElementById('graphStepExplanation').innerHTML = `${badge}<p style="font-weight:600;margin-top:8px">${_escapeHtml(state.explanation)}</p>`;
        document.getElementById('graphStatNodes').textContent = state.nodeCount;
        document.getElementById('graphStatEdges').textContent = state.edgeCount;
        document.getElementById('graphStatVisited').textContent = state.visited?.size || 0;
        document.getElementById('graphStatSteps').textContent = state.steps;
        document.getElementById('graphStepDisplay').textContent = `${this.graphStates.index + 1} / ${this.graphStates.total}`;
        document.getElementById('graphPrevBtn').disabled = !this.graphStates.hasPrev;
        document.getElementById('graphNextBtn').disabled = !this.graphStates.hasNext;
    }

    graphNextStep() {
        const state = this.graphStates.next();
        if (state) this._renderGraphState(state); else this.stopGraph();
    }

    graphPrevStep() {
        const state = this.graphStates.prev();
        if (state) this._renderGraphState(state);
    }

    toggleGraphPlay() {
        if (this.graphPlaying) this.stopGraph(); else this._startGraphAutoPlay();
    }

    _startGraphAutoPlay() {
        if (!this.graphStates.total) return;
        this.graphPlaying = true;
        document.getElementById('graphPlayBtn').innerHTML = _pauseIcon();
        const tick = () => {
            if (!this.graphStates.hasNext) { this.stopGraph(); return; }
            this.graphNextStep();
            if (this.graphPlaying) this.graphTimer = setTimeout(tick, this._speed('graphSpeedSlider'));
        };
        tick();
    }

    stopGraph() {
        this.graphPlaying = false;
        if (this.graphTimer) { clearTimeout(this.graphTimer); this.graphTimer = null; }
        const btn = document.getElementById('graphPlayBtn');
        if (btn) btn.innerHTML = _playIcon();
    }

    resetGraph() {
        this.stopGraph(); this.graphStates.reset();
        this._enableGraphControls(false);
        const t = TRANSLATIONS[this.lang];
        document.getElementById('graphStepExplanation').innerHTML = `<p>${t.buildGraphFirst}</p>`;
        ['graphStatVisited','graphStatSteps'].forEach(id => document.getElementById(id).textContent = '0');
        document.getElementById('graphStatNodes').textContent = this.graphEngine.nodes.size;
        document.getElementById('graphStatEdges').textContent = this.graphEngine.edges;
        document.getElementById('graphStepDisplay').textContent = '0 / 0';
        this._highlightLine('graphPseudoCode', -1);
        this._renderGraph();
    }

    _enableGraphControls(on) {
        document.getElementById('graphPlayBtn').disabled = !on;
        document.getElementById('graphNextBtn').disabled = !on;
        document.getElementById('graphPrevBtn').disabled = true;
    }

    /* ── Keyboard ── */
    _handleKey(e) {
        if (e.target.tagName === 'INPUT') return;
        
        // Check for shortcuts with modifiers
        if (e.key === '?') {
            e.preventDefault();
            this.showKeyboardShortcuts();
            return;
        }
        
        switch (this.currentPage) {
            case 'sorting':
                if (e.key === 'ArrowRight') { e.preventDefault(); this.lang === 'ar' ? this.prevStep() : this.nextStep(); }
                else if (e.key === 'ArrowLeft') { e.preventDefault(); this.lang === 'ar' ? this.nextStep() : this.prevStep(); }
                else if (e.key === ' ') { e.preventDefault(); this.togglePlay(); }
                break;
            case 'trees':
                if (e.key === 'ArrowRight') { e.preventDefault(); this.lang === 'ar' ? this.treePrevStep() : this.treeNextStep(); }
                else if (e.key === 'ArrowLeft') { e.preventDefault(); this.lang === 'ar' ? this.treeNextStep() : this.treePrevStep(); }
                else if (e.key === ' ') { e.preventDefault(); this.toggleTreePlay(); }
                break;
            case 'searching':
                if (e.key === 'ArrowRight') { e.preventDefault(); this.lang === 'ar' ? this.searchPrevStep() : this.searchNextStep(); }
                else if (e.key === 'ArrowLeft') { e.preventDefault(); this.lang === 'ar' ? this.searchNextStep() : this.searchPrevStep(); }
                else if (e.key === ' ') { e.preventDefault(); this.toggleSearchPlay(); }
                break;
            case 'lists':
                if (e.key === 'ArrowRight') { e.preventDefault(); this.lang === 'ar' ? this.listPrevStep() : this.listNextStep(); }
                else if (e.key === 'ArrowLeft') { e.preventDefault(); this.lang === 'ar' ? this.listNextStep() : this.listPrevStep(); }
                else if (e.key === ' ') { e.preventDefault(); this.toggleListPlay(); }
                break;
            case 'stacks':
                if (e.key === 'ArrowRight') { e.preventDefault(); this.lang === 'ar' ? this.stackPrevStep() : this.stackNextStep(); }
                else if (e.key === 'ArrowLeft') { e.preventDefault(); this.lang === 'ar' ? this.stackNextStep() : this.stackPrevStep(); }
                else if (e.key === ' ') { e.preventDefault(); this.toggleStackPlay(); }
                break;
            case 'graphs':
                if (e.key === 'ArrowRight') { e.preventDefault(); this.lang === 'ar' ? this.graphPrevStep() : this.graphNextStep(); }
                else if (e.key === 'ArrowLeft') { e.preventDefault(); this.lang === 'ar' ? this.graphNextStep() : this.graphPrevStep(); }
                else if (e.key === ' ') { e.preventDefault(); this.toggleGraphPlay(); }
                break;
        }
    }

    showKeyboardShortcuts() {
        const t = TRANSLATIONS[this.lang];
        showToast(`⌨️ Space: Play/Pause | ← → : Step | ?: Help`, 'info');
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
