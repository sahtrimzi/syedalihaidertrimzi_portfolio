/* JavaScript Functionality - Syed Ali Haider Trimzi Data Engineer Portfolio */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. Mobile Menu Toggle
    // -------------------------------------------------------------
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            navToggle.classList.toggle('active');
            
            // Toggle hamburger animation
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('open')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                
                // Set active link class
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }

    // -------------------------------------------------------------
    // 2. Active Section Highlighting on Scroll
    // -------------------------------------------------------------
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // -------------------------------------------------------------
    // 3. Roadmap Data & Interactive Controller
    // -------------------------------------------------------------
    const roadmapData = {
        1: {
            duration: "Phase 1",
            status: "Current Phase",
            statusClass: "status-active",
            title: "Phase 1: Database Mastery",
            desc: "Learning the fundamentals of database design and querying. My focus is on understanding relational data modeling, writing efficient SQL, and exploring document-based NoSQL storage.",
            techTags: ["PostgreSQL", "MongoDB Atlas", "ERD Modeling", "SQL Joins & CTEs", "Database Normalization"],
            checklist: [
                "<strong>Learn:</strong> Understand core SQL concepts, joins, and database normalization.",
                "<strong>Design:</strong> Create an Entity-Relationship Diagram (ERD) for a university system.",
                "<strong>Build:</strong> Implement the relational schema in PostgreSQL with primary and foreign keys.",
                "<strong>Query:</strong> Write 50+ practical SQL queries utilizing CTEs, window functions, and aggregations.",
                "<strong>Expand:</strong> Setup a MongoDB Atlas cluster and learn basic NoSQL document structuring.",
                "<strong>Document:</strong> Publish the complete schema and query library to GitHub for review."
            ],
            projTitle: "University Management System",
            projDesc: "A practical database modeling project mapping out a university's core operations, including student enrollments, course schedules, and grading.",
            projSnapshot: ["12+ Relational Tables", "PostgreSQL & pgAdmin", "Complete ER Diagram", "50+ Documented Queries"]
        },
        2: {
            duration: "Phase 2",
            status: "Planned Track",
            statusClass: "status-planned",
            title: "Phase 2: Python + Data Analytics",
            desc: "Harnessing programming to extract, load, and analyze datasets. Exploring core data analytics frameworks and presenting discoveries via dashboards. Developing custom Exploratory Data Analysis (EDA) projects on local Pakistani datasets.",
            techTags: ["Python", "Pandas", "NumPy", "Matplotlib", "SQLAlchemy", "Power BI", "DAX", "EDA", "Statistics"],
            checklist: [
                "Master Python essentials for data manipulation: lists, dicts, comprehension, and OOP.",
                "Learn core analytics packages: Pandas (DataFrames, Merging, Grouping) & NumPy.",
                "Study visual packages: Matplotlib and Seaborn for plotting correlations and trends.",
                "Perform Exploratory Data Analysis on real Pakistani E-commerce retail data and Finance transaction trends.",
                "Understand statistics basics: distributions, hypothesis testing, and linear regression models.",
                "Build dynamic dashboards in Power BI utilizing DAX (Data Analysis Expressions).",
                "Publish a comprehensive Python Analysis Notebook and Dataset on Kaggle."
            ],
            projTitle: "Pakistani E-Commerce & Finance Dashboard",
            projDesc: "A complete data analysis portfolio project containing Kaggle notebooks executing EDA on retail consumer behaviors and local stock performance, linked to an interactive Power BI dashboard.",
            projFlow: ["Raw Pakistani Data", "Pandas EDA", "SQLAlchemy Engine", "Power BI DAX Dashboard"]
        },
        3: {
            duration: "Phase 3",
            status: "Planned Track",
            statusClass: "status-planned",
            title: "Phase 3: Linux + Git + Airflow",
            desc: "Setting up development and execution workspaces. Automating cron workloads, managing source trees, and building the first workflows using Apache Airflow orchestrators inside virtual environments.",
            techTags: ["Linux / WSL", "Bash Scripting", "Cron Jobs", "Git Advanced", "GitHub Actions", "Docker", "Apache Airflow"],
            checklist: [
                "Transition daily programming workspace to Linux command line using WSL (Windows Subsystem for Linux).",
                "Write custom Bash shell scripts to automate data collection, file transfers, and system checkups.",
                "Schedule jobs using cron utility for periodic automation.",
                "Master Git concepts: branching models, merge conflicts, pull requests, and GitHub actions.",
                "Spin up containerized applications using Docker and Docker Compose.",
                "Install Apache Airflow via Docker containers and author 5+ production DAGs (Directed Acyclic Graphs).",
                "Project: Write a pipeline that automatically fetches database records, dumps CSV files, and uploads to AWS S3."
            ],
            projTitle: "Automated Data Pipeline (DB to S3)",
            projDesc: "Containerized Apache Airflow environment scheduling DAGs that extract transactional DB entries, transform structure to CSV, and securely push datasets to AWS S3 storage buckets.",
            projFlow: ["Postgres Data", "Bash Script Extract", "Airflow Scheduler (Docker)", "AWS S3 Loader"]
        },
        4: {
            duration: "Phase 4",
            status: "Planned Track",
            statusClass: "status-planned",
            title: "Phase 4: Apache Spark + PySpark",
            desc: "Entering the Big Data realm. Shifting processing loads from single-machine Pandas frames to distributed computing architectures. Mastering memory management, dataset partitions, and stream configurations.",
            techTags: ["PySpark", "Spark SQL", "SparkSession", "Spark Streaming", "DataFrames", "Caching & Partitioning", "Broadcast Joins"],
            checklist: [
                "Understand distributed computing fundamentals: Driver, Executor, Worker nodes, and lazy evaluation.",
                "Master PySpark syntax: SparkSession initialization, loading raw files, transformations, and actions.",
                "Leverage Spark SQL to run declarative queries over in-memory Spark DataFrames.",
                "Learn performance optimization: Partitioning, partitioning key selection, caching, and broadcast joins.",
                "Explore Spark Streaming for processing micro-batches of real-time incoming data.",
                "Benchmark Spark's scaling efficiency vs Pandas by processing a dataset containing 1,000,000+ rows."
            ],
            projTitle: "1 Million Row PySpark Processor",
            projDesc: "Benchmarking script and reports processing large datasets, demonstrating transformations, partition optimizations, and comparing running execution speeds directly to Pandas.",
            projFlow: ["1M+ Row CSV", "PySpark Session", "Broadcast Joins / Partitions", "Parquet Outputs"]
        },
        5: {
            duration: "Phase 5",
            status: "Planned Track",
            statusClass: "status-planned",
            title: "Phase 5: Cloud (AWS) + Data Warehouse",
            desc: "Designing and scaling enterprise warehouses on cloud infrastructure. Configuring ingestion engines, cataloging schemas, designing star layouts, and deploying modeling transformations via dbt.",
            techTags: ["AWS S3", "AWS Glue", "Redshift", "AWS Lambda", "dbt (Data Build Tool)", "Star Schema Design", "IAM Policies"],
            checklist: [
                "Understand AWS core services: S3 Storage, RDS Instances, IAM Security Policies.",
                "Build AWS serverless logic using Lambda functions triggered by storage upload events.",
                "Configure AWS Glue Crawlers to discover schemas and build catalog tables.",
                "Design and construct a cloud Data Warehouse utilizing AWS Redshift in a Star Schema format.",
                "Implement dbt (Data Build Tool) to write SQL models, run schema validation tests, and build documentation.",
                "Integrate the pipeline: raw e-commerce entries uploaded to S3 -> Glue schema -> Redshift warehouse -> Power BI."
            ],
            projTitle: "E-Commerce AWS Data Warehouse",
            projDesc: "End-to-end e-commerce pipeline collecting transactional events. Files landing on S3 trigger Glue cataloging and Redshift loading, modeled into star schemas using dbt.",
            projFlow: ["S3 landing", "Glue Crawlers / Job", "AWS Redshift Star Schema", "dbt Models & Tests"]
        },
        6: {
            duration: "Phase 6",
            status: "Planned Track",
            statusClass: "status-planned",
            title: "Phase 6: Kafka + Docker + Kubernetes",
            desc: "Constructing event-driven, real-time data streaming layers. Decoupling ingestion endpoints from analytical targets using Kafka messaging brokers and deploying services in containerized clusters.",
            techTags: ["Docker Compose", "Kubernetes (K8s)", "Apache Kafka", "Kafka Connect", "Spark Streaming", "Producers & Consumers", "Pods & Services"],
            checklist: [
                "Write production-grade Dockerfiles, optimize image layers, and push builds to Docker Hub registries.",
                "Master Apache Kafka: brokers, topics, partition offsets, producers, consumers, and serialization.",
                "Configure Kafka Connect to stream change-data-capture (CDC) logs from databases automatically.",
                "Learn Kubernetes basics: Pod configurations, Service routing, Deployments, and container orchestration.",
                "Create a real-time analytics streaming engine: Kafka Topics -> PySpark Streaming -> PostgreSQL warehouse."
            ],
            projTitle: "Real-Time Order Processing System",
            projDesc: "Stream ingestion application routing mock e-commerce transactions through Kafka brokers, running real-time aggregations in PySpark, and dumping reports to Postgres dashboards.",
            projFlow: ["Order Event Stream", "Kafka Brokers", "PySpark Stream Ingest", "Postgres target"]
        },
        7: {
            duration: "Capstone",
            status: "Planned Track",
            statusClass: "status-planned",
            title: "Phase 7: IaC + Monitoring + Capstone",
            desc: "Bringing pipelines up to production grade. Automating deployment scripts, writing data quality validation rules, building monitoring setups, and culminating in the final end-to-end data platform.",
            techTags: ["Terraform", "Prometheus", "Grafana", "Great Expectations", "CI/CD Actions", "Infrastructure as Code", "Data Quality"],
            checklist: [
                "Author Terraform scripts to provision and deploy AWS clusters, databases, and buckets via IaC.",
                "Deploy the Prometheus and Grafana monitoring stack to track pipeline system health and latency.",
                "Implement Great Expectations framework to perform automated unit tests on incoming dataset quality.",
                "Configure automated CI/CD workflows using GitHub/GitLab Actions to check code and run database migrations.",
                "Assemble Capstone: Fully automated, monitored, and tested e-commerce analytics cloud platform."
            ],
            projTitle: "End-to-End E-Commerce Data Platform",
            projDesc: "The ultimate synthesis of the roadmap: Terraform provisions AWS Redshift, Airflow runs DAGs, Great Expectations audits database quality, and Grafana maps throughput metrics.",
            projFlow: ["Terraform IaC", "Git Actions CI/CD", "Great Expectations Audit", "Prometheus & Grafana Alerting"]
        }
    };

    const stepBtns = document.querySelectorAll('.step-btn');
    const phaseDetailContainer = document.getElementById('phaseDetailContainer');

    function updatePhaseDisplay(phaseId) {
        const data = roadmapData[phaseId];
        if (!data) return;

        // Fade out
        phaseDetailContainer.style.opacity = 0;
        phaseDetailContainer.style.transform = 'translateY(10px)';
        phaseDetailContainer.style.transition = 'all 0.25s ease';

        setTimeout(() => {
            // Update fields
            document.getElementById('detailDuration').textContent = data.duration;
            
            const statusBadge = document.getElementById('detailStatus');
            statusBadge.className = `phase-status ${data.statusClass}`;
            statusBadge.textContent = data.status;

            document.getElementById('detailTitle').textContent = data.title;
            document.getElementById('detailDesc').textContent = data.desc;

            // Update Tech Tags
            const tagsContainer = document.getElementById('detailTechTags');
            tagsContainer.innerHTML = '';
            data.techTags.forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.textContent = tag;
                tagsContainer.appendChild(span);
            });

            // Update Checklist
            const listContainer = document.getElementById('detailChecklist');
            listContainer.innerHTML = '';
            data.checklist.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                listContainer.appendChild(li);
            });

            // Update Project Details
            document.getElementById('detailProjTitle').textContent = data.projTitle;
            document.getElementById('detailProjDesc').textContent = data.projDesc;

            // Update Project Flow Ingress Diagram
            const flowContainer = document.getElementById('detailProjSnapshot') || document.getElementById('detailProjFlow');
            if (flowContainer) {
                if (data.projSnapshot) {
                    flowContainer.outerHTML = `<div class="project-snapshot" id="detailProjSnapshot"></div>`;
                    const snapshotContainer = document.getElementById('detailProjSnapshot');
                    data.projSnapshot.forEach(item => {
                        const node = document.createElement('div');
                        node.className = 'snapshot-item';
                        node.innerHTML = `<span>✓</span> ${item}`;
                        snapshotContainer.appendChild(node);
                    });
                } else if (data.projFlow) {
                    flowContainer.outerHTML = `<div class="pipeline-flow-mini" id="detailProjFlow"></div>`;
                    const newFlowContainer = document.getElementById('detailProjFlow');
                    data.projFlow.forEach((step, idx) => {
                        const node = document.createElement('div');
                        node.className = 'flow-node';
                        node.textContent = step;
                        newFlowContainer.appendChild(node);

                        if (idx < data.projFlow.length - 1) {
                            const arrow = document.createElement('div');
                            arrow.className = 'flow-arrow';
                            arrow.textContent = '➔';
                            newFlowContainer.appendChild(arrow);
                        }
                    });
                } else {
                    flowContainer.innerHTML = '';
                }
            }

            // Fade in
            phaseDetailContainer.style.opacity = 1;
            phaseDetailContainer.style.transform = 'translateY(0)';
        }, 250);
    }

    if (stepBtns.length > 0) {
        stepBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                stepBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const phaseId = btn.getAttribute('data-phase');
                updatePhaseDisplay(phaseId);
            });
        });
    }

    // -------------------------------------------------------------
    // 4. Projects Portfolio Category Filters
    // -------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    card.style.opacity = 0;
                    card.style.transform = 'scale(0.95)';
                    card.style.transition = 'all 0.3s ease';

                    setTimeout(() => {
                        if (filter === 'all' || card.getAttribute('data-category') === filter) {
                            card.style.display = 'flex';
                            setTimeout(() => {
                                card.style.opacity = 1;
                                card.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            card.style.display = 'none';
                        }
                    }, 300);
                });
            });
        });
    }

    // -------------------------------------------------------------
    // 5. Architecture Drawer Schematics Rendering
    // -------------------------------------------------------------
    const drawerOverlay = document.getElementById('drawerOverlay');
    const projectDrawer = document.getElementById('projectDrawer');
    const drawerClose = document.getElementById('drawerClose');
    const archButtons = document.querySelectorAll('.btn-arch');
    const architectureCanvas = document.getElementById('architectureCanvas');
    const drawerTitle = document.getElementById('drawerTitle');
    const drawerDesc = document.getElementById('drawerDesc');

    const projectArchitectures = {
        1: {
            title: "University Management System Database Schema",
            desc: "A composite database environment. PostgreSQL handles highly structured academic records (enrollment registries, grade transcripts, staff directory, financial statements) enforcing full SQL constraints and relations. MongoDB stores semi-structured event logs, student portals' cache structures, and course curricula profiles. Solves query metrics like cumulative GPA calculation, scheduling clashes, and payroll analysis.",
            flow: [
                "User Request / Admin Frontend UI",
                "PostgreSQL Relational Storage (Entities: Students, Courses, Transcripts)",
                "MongoDB Document Database (Entities: Syllabus, Exam Logs, Portal Configs)",
                "Combined Query Optimization View & pgAdmin / Atlas Dashboards"
            ]
        },
        2: {
            title: "Pakistani Market Sales & Stocks Analysis Flow",
            desc: "Data-analytical ETL routing. Collects retail e-commerce sales datasets (representing regional sales in Lahore, Karachi, Islamabad) and extracts stock prices of local companies from stock archives. Pipelines clean records using Pandas, run statistical checks (correlations, linear trend projections), write output models back using SQLAlchemy, and feed charts directly inside a Power BI dashboard using DAX KPIs.",
            flow: [
                "Regional Retail CSV Records & Stock market API extracts",
                "Pandas Pipeline (Data cleaning, outlier removal, missing rows handler)",
                "SQLAlchemy Engine writing cleaned records to DB Store",
                "Power BI Desktop (Calculates sales averages, profit bounds, stock variances via DAX)"
            ]
        },
        3: {
            title: "Automated Data Pipeline (DB to S3) Flowchart",
            desc: "Process workflow scheduler built inside a containerized workspace. An Apache Airflow DAG initializes hourly/daily loops. A Bash script acts as the worker, generating pg_dump SQL extraction routines, wrapping raw CSV dumps, zip compressing outputs, and launching AWS CLI requests uploading final datasets to secured S3 landing zones.",
            flow: [
                "PostgreSQL Server (Source)",
                "Apache Airflow Scheduler (Orchestrates execution, tracks failures)",
                "Bash Runner (Triggers pg_dump, generates CSV outputs)",
                "AWS S3 Landing Bucket (Storage Archive)"
            ]
        },
        4: {
            title: "PySpark 1-Million Row Processor Benchmark Flow",
            desc: "Comparison of scaling performance. Processes big financial transaction data sheets. The script loads files into a PySpark Session, demonstrates Spark Engine speed boosts: setting up cache check-points, optimizing filters, executing broadcast joins over smaller lookup catalogs, partitioning tables, and writing outputs to columnar Parquet files vs local Pandas execution.",
            flow: [
                "1M+ Transaction Ledger Entries (CSV/JSON)",
                "PySpark DataFrame Session (Lazy evaluation plan)",
                "In-Memory Cache & Broadcast Join (Performance tweak)",
                "Columnar Partitioned Parquet Outputs (Speed comparison vs Pandas)"
            ]
        },
        5: {
            title: "Cloud E-Commerce Data Warehouse Schema",
            desc: "Modern cloud analytical pipeline. Transaction files land on AWS S3 buckets. An AWS Glue Crawler triggers, dynamically updates catalog definitions. An AWS Glue ETL Job loads files, performs joins, and writes to AWS Redshift cluster tables structured as a Star Schema (Fact Orders, Dim Customers, Dim Products). dbt (Data Build Tool) models dependencies, runs tests, and structures tables for BI consumption.",
            flow: [
                "E-Commerce Event Data (S3 Buckets)",
                "AWS Glue Crawler & Data Catalog",
                "AWS Redshift Warehouse (Star Schema target tables)",
                "dbt compilation (Aggregations, quality checks, dev builds)"
            ]
        },
        6: {
            title: "Real-Time Order Processing System Architecture",
            desc: "High-throughput, event-driven streaming pipeline. A transaction generator pushes order logs into a cluster of Apache Kafka topics. Kafka Connect handles source transfers. A PySpark Streaming app consumes topic buffers, aggregates transactions over window intervals, and writes streaming results directly to PostgreSQL tables for real-time tracking.",
            flow: [
                "Continuous Order Event Producer",
                "Apache Kafka Ingestion Brokers (Topic: ecom_transactions)",
                "PySpark Streaming Consumer (Processes slide windows)",
                "PostgreSQL Real-time Analytics Dashboard"
            ]
        }
    };

    function openDrawer(projectId) {
        const arch = projectArchitectures[projectId];
        if (!arch) return;

        drawerTitle.textContent = arch.title;
        drawerDesc.textContent = arch.desc;

        // Render Flow Nodes
        architectureCanvas.innerHTML = '';
        const flowContainer = document.createElement('div');
        flowContainer.className = 'arch-flow-diagram';

        arch.flow.forEach((nodeText, index) => {
            const node = document.createElement('div');
            node.className = 'arch-node';
            // Highlight current project source
            if (index === 0) node.classList.add('active-node');
            node.textContent = nodeText;
            flowContainer.appendChild(node);

            if (index < arch.flow.length - 1) {
                const arrow = document.createElement('div');
                arrow.className = 'arch-arrow';
                arrow.textContent = '▼';
                flowContainer.appendChild(arrow);
            }
        });

        architectureCanvas.appendChild(flowContainer);

        // Open drawer
        drawerOverlay.classList.add('open');
    }

    function closeDrawer() {
        drawerOverlay.classList.remove('open');
    }

    if (archButtons.length > 0) {
        archButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const projectId = btn.getAttribute('data-project');
                openDrawer(projectId);
            });
        });
    }

    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }

    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', (e) => {
            if (e.target === drawerOverlay) {
                closeDrawer();
            }
        });
    }

    // -------------------------------------------------------------
    // 6. High-Performance Canvas Data Pipeline Background
    // -------------------------------------------------------------
    const canvas = document.getElementById('pipelineCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Stationary Nodes (Database, Cloud, Stream symbols)
        let nodes = [];
        // Animated data packets traveling along connections
        let packets = [];

        function initNodes() {
            nodes = [];
            packets = [];
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            // Generate nodes based on screen dimensions
            const cols = 5;
            const rows = 4;
            const xGap = width / (cols + 1);
            const yGap = height / (rows + 1);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    // Introduce a bit of randomness to node placements
                    const x = xGap * (i + 1) + (Math.random() - 0.5) * (xGap * 0.4);
                    const y = yGap * (j + 1) + (Math.random() - 0.5) * (yGap * 0.4);
                    nodes.push({
                        x,
                        y,
                        radius: 3 + Math.random() * 3,
                        connections: []
                    });
                }
            }

            // Create connections (link nearby nodes in forward paths)
            nodes.forEach((node, idx) => {
                nodes.forEach((otherNode, oIdx) => {
                    if (idx === oIdx) return;
                    const dx = otherNode.x - node.x;
                    const dy = otherNode.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Connect if nodes are forward (left to right) and within distance threshold
                    if (dx > 20 && dx < xGap * 1.5 && dist < yGap * 2) {
                        node.connections.push(otherNode);
                    }
                });
            });
        }

        function createPacket() {
            // Pick a node from the first two columns to start the packet
            const startNodes = nodes.filter(n => n.x < width * 0.4);
            if (startNodes.length === 0) return;

            const startNode = startNodes[Math.floor(Math.random() * startNodes.length)];
            if (startNode.connections.length === 0) return;

            const targetNode = startNode.connections[Math.floor(Math.random() * startNode.connections.length)];

            packets.push({
                x: startNode.x,
                y: startNode.y,
                source: startNode,
                target: targetNode,
                progress: 0,
                speed: 0.005 + Math.random() * 0.008,
                size: 2 + Math.random() * 2,
                color: Math.random() > 0.5 ? '#00f2fe' : '#a855f7'
            });
        }

        function drawPipeline() {
            ctx.clearRect(0, 0, width, height);

            // Draw connection lines
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
            ctx.lineWidth = 1;
            nodes.forEach(node => {
                node.connections.forEach(conn => {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(conn.x, conn.y);
                    ctx.stroke();
                });
            });

            // Draw static nodes
            nodes.forEach(node => {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Update & Draw packets
            packets.forEach((pkt, index) => {
                pkt.progress += pkt.speed;

                if (pkt.progress >= 1) {
                    // If target node has connections, route the packet forward
                    const currentTarget = pkt.target;
                    if (currentTarget.connections.length > 0 && Math.random() > 0.25) {
                        pkt.source = currentTarget;
                        pkt.target = currentTarget.connections[Math.floor(Math.random() * currentTarget.connections.length)];
                        pkt.progress = 0;
                        pkt.x = pkt.source.x;
                        pkt.y = pkt.source.y;
                    } else {
                        // Remove packet if pipeline finishes
                        packets.splice(index, 1);
                        return;
                    }
                }

                // Interpolate packet position
                pkt.x = pkt.source.x + (pkt.target.x - pkt.source.x) * pkt.progress;
                pkt.y = pkt.source.y + (pkt.target.y - pkt.source.y) * pkt.progress;

                // Draw packet with slight outer glow
                ctx.shadowBlur = 8;
                ctx.shadowColor = pkt.color;
                ctx.fillStyle = pkt.color;
                ctx.beginPath();
                ctx.arc(pkt.x, pkt.y, pkt.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0; // reset
            });

            // Limit concurrent packet numbers
            if (packets.length < 18 && Math.random() < 0.05) {
                createPacket();
            }

            requestAnimationFrame(drawPipeline);
        }

        window.addEventListener('resize', initNodes);
        initNodes();
        drawPipeline();
    }

    // -------------------------------------------------------------
    // 7. Form Submission Handling
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const formSubmitBtn = document.getElementById('formSubmitBtn');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            formSubmitBtn.disabled = true;
            formSubmitBtn.textContent = 'Processing Data...';
            formStatus.className = 'form-status';
            formStatus.textContent = '';

            // Simulated pipeline delay
            setTimeout(() => {
                formSubmitBtn.disabled = false;
                formSubmitBtn.textContent = 'Send Message';
                formStatus.className = 'form-status success';
                formStatus.innerHTML = '⚡ <strong>Data pipeline ingest successful!</strong> Thank you for reaching out, Syed Ali Haider Trimzi will reply soon.';
                
                // Clear form inputs
                contactForm.reset();
            }, 1500);
        });
    }
});
