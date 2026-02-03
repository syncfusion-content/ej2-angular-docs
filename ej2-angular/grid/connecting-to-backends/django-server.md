---
layout: post
title: MSSQL Server Data Binding in Angular Grid using DRF | Syncfusion
description: Learn how to connect Microsoft SQL Server with Django REST Framework and bind data to Syncfusion Angular Grid with complete CRUD operations.
platform: ej2-angular
control: grid
keywords: adaptors, urladaptor, mssql, remotedata 
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Angular Grid with Django REST Framework (DRF)

The Syncfusion [Angular Grid](https://ej2.syncfusion.com/angular/documentation/grid/getting-started) combined with Django REST Framework and Microsoft SQL Server provides a robust, scalable data‑driven application architecture. The Syncfusion Angular Grid delivers a rich, high‑performance client‑side experience with advanced features like paging, sorting, filtering, searching and CRUD operations.

**What is Django REST Framework?**

[Django](https://docs.djangoproject.com/en/6.0) is a high‑level Python web framework used to build secure and scalable backend applications quickly. It includes built‑in features such as database ORM, URL routing, authentication, and security, allowing developers to focus on application logic instead of repetitive setup.

[Django REST Framework (DRF)](https://www.django-rest-framework.org/) extends Django to build RESTful APIs that return data in JSON format. It simplifies creating APIs with support for serializers, authentication, pagination, filtering, and CRUD operations, making it well suited for frontend applications like Angular.

**What is Microsoft SQL Server?**

**Microsoft SQL Server** is a database system used to store and manage application data in an organized way. It allows applications to save, read, update, and delete data securely and efficiently, making it a common choice for backend systems that work with web frameworks and APIs.

## Prerequisites

- **Node.js** LTS (v20+), npm/yarn
- **Angular** 16+
- **Python** 3.11+
- **Django** 5.2+, **Django REST Framework**
- **Microsoft SQL Server** (or adapt to Postgre/MySQL/SQLite)

## Setting up the Django REST Framework for Microsoft SQL Database

Create a Python virtual environment to install the packages for the server without conflicts by running the commands below in the terminal:

```bash
python -m venv .venv
.venv\Scripts\activate   # Mac/Linux: source .venv/bin/activate
pip install django djangorestframework django-filter django-cors-headers mssql-django pyodbc
```

- `mssql-django` enables Django to connect to SQL Server through `pyodbc`.
- For Django settings reference, see [databases](https://docs.djangoproject.com/en/6.0/ref/settings/#databases).

Initialize the project and app (if not already):

```bash
django-admin startproject server .
python manage.py startapp library
```

---

### Configure Django settings

The **server/settings.py** defines the key configuration of the DRF application. Each section of this settings is explained below in detail.

**DATABASES — SQL Server connection**

This section wires Django to SQL Server. Each property:
- **ENGINE**: Database backend; for SQL Server via `mssql-django`, set to `"mssql"`.
- **NAME**: Database name to connect to (e.g., **LibraryDB**).
- **USER**: SQL Server login used by Django.
- **PASSWORD**: Password for the above user.
- **HOST**: Server/instance name or address (e.g., **(localdb)\\MSSQLLocalDB** or a hostname).
- **OPTIONS.driver**: ODBC driver to use (e.g., **ODBC Driver 18 for SQL Server**). Must be installed on the machine.
- **OPTIONS.trustServerCertificate**: When **"yes"**, accepts the server certificate without validation (convenient for local/dev). For production, configure TLS properly and remove this override.

```python
DATABASES = {
    "default": {
        "ENGINE": "mssql",
        "NAME": "LibraryDB",
        "USER": "django_user",
        "PASSWORD": "Django@123",
        "HOST": "(localdb)\\MSSQLLocalDB",
        "OPTIONS": {
            "driver": "ODBC Driver 18 for SQL Server",
            "trustServerCertificate": "yes",
        },
    }
}
```

**INSTALLED_APPS — enable Django, DRF, filters, CORS, and your app**

Ensure these apps are listed so APIs, filtering, and CORS work. If **library** already exists, confirm it’s present.

```python
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "django_filters",
    "corsheaders",
    "library",
]
```

**MIDDLEWARE — request pipeline and CORS hook**

Place CORS middleware near the top so preflight requests are handled correctly.

```python
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]
```

**CORS_ALLOWED_ORIGINS — allow the Angular dev server**

Add the Angular dev origin so the browser can call the API during development.

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:4200",
]
```

**REST_FRAMEWORK — parsers, pagination, filtering/sorting/searching**

These defaults let DRF parse JSON/forms, apply page sizing, and enable filtering/sorting/searching backends.

```python
REST_FRAMEWORK = {
    "DATETIME_INPUT_FORMATS": [
        "%Y-%m-%dT%H:%M:%S.%fZ",
        "%Y-%m-%dT%H:%M:%SZ",
        "%Y-%m-%dT%H:%M:%S",
        "iso-8601",
    ],
    "DATE_INPUT_FORMATS": [
        "%Y-%m-%d",
        "%Y-%m-%dT%H:%M:%S.%fZ",
        "%Y-%m-%dT%H:%M:%SZ",
        "%Y-%m-%dT%H:%M:%S",
        "iso-8601",
    ],
    "DEFAULT_PARSER_CLASSES": [
        "rest_framework.parsers.JSONParser",
        "rest_framework.parsers.FormParser",
        "rest_framework.parsers.MultiPartParser",
    ],
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 12,
    "DEFAULT_FILTER_BACKENDS": [
        "django_filters.rest_framework.DjangoFilterBackend",
        "rest_framework.filters.SearchFilter",
        "rest_framework.filters.OrderingFilter",
    ],
}
```

### Define models

A Django model defines how data is stored and accessed in the database. Each model maps to a database table and exposes its fields as structured records that can be queried, created, updated, and deleted by the application and API.

In **library/models.py**, you can add the model defining your database table structure. It defines the data shape the Grid reads/writes: core book/borrower fields, key dates, and a status string. Indexed fields ("book_title", "author_name", "genre", "lending_status") speed up server‑side filtering/search; default ordering shows most recent borrowings first.

```python
from django.db import models

class BookLending(models.Model):
    record_id = models.AutoField(primary_key=True)
    book_title = models.CharField(max_length=255)
    isbn_number = models.CharField(max_length=32, db_index=True)
    author_name = models.CharField(max_length=255)
    genre = models.CharField(max_length=100)
    borrower_name = models.CharField(max_length=255)
    borrower_email = models.EmailField()
    borrowed_date = models.DateField()
    expected_return_date = models.DateField()
    actual_return_date = models.DateField(null=True, blank=True)
    lending_status = models.CharField(max_length=20)

    class Meta:
        indexes = [
            models.Index(fields=["book_title"]),
            models.Index(fields=["author_name"]),
            models.Index(fields=["genre"]),
            models.Index(fields=["lending_status"]),
        ]
        ordering = ["-borrowed_date"]

    def __str__(self):
        return f"{self.book_title} ({self.isbn_number}) - {self.borrower_name}"
```

Then run migrations to create/update the database schema so it matches "BookLending" model using the below commands:

Run the below command to detect changes in `models.py` and generates a versioned migration file.
```bash
python manage.py makemigrations
```

This command applies that migration to the database (creates the table/columns or alters them as needed).
```bash
python manage.py migrate
```

Migrations keep your code and database in sync by recording schema changes (add/remove fields, new tables) and applying them safely across environments (dev/stage/prod). If the model changes later, repeat the same two commands to evolve the schema without manual SQL.

### Configure API routing

Register a Django REST Framework router for the lending endpoint so that all read and write operations for book‑lending resources are exposed under a single RESTful route. This endpoint will handle listing, retrieving, creating, updating, and deleting lending records through the associated ViewSet. This can be configured through **library/models.py**.

```python
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from library.views import BookLendingViewSet

router = DefaultRouter()
router.register(r'api/lendings', BookLendingViewSet, basename='lendings')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
```

---

## Setting up the Angular application

Create a new Angular workspace or app. This provides the project structure for adding Syncfusion Grid components and configuration.

```bash
npm create @angular/cli@latest client -- --directory .
# or: ng new client
```

### Install Syncfusion Grid packages

Install the necessary Syncfusion packages.

```bash
npm install @syncfusion/ej2-angular-grids @syncfusion/ej2-data --save
```

### Configure Syncfusion Grid styles

Import the required Syncfusion styles into your global stylesheet to ensure the Grid renders correctly.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/bootstrap5.3.css';
@import '../node_modules/@syncfusion/ej2-angular-grids/styles/bootstrap5.3.css';
```

For this project, the `Bootstrap 5.3` theme is used. You can choose a different theme or customize the existing theme based on your requirements. Refer to the [Syncfusion Angular Components Appearance](https://ej2.syncfusion.com/angular/documentation/appearance) documentation to learn more about theming and customization options.

### Configure DataManager with DRF

[DataManager]((https://ej2.syncfusion.com/angular/documentation/data/getting-started)) is a data layer that sends all Grid actions (read, sort, filter, search, paging, CRUD) to the backend. It standardizes how components communicate with remote services and handles query serialization.

[UrlAdaptor](https://ej2.syncfusion.com/angular/documentation/data/adaptors#url-adaptor) is a built‑in adaptor that formats requests for REST-style endpoints, like the Django REST Framework API. It posts Grid operations to the server and interprets JSON responses.

Create a `DataManager` instance with the `UrlAdaptor` in the **src/app/app.component.ts** and point it to the DRF endpoint. This DataManager will serialize all Grid interactions (data and CRUD) and post them to the DRF server.

```ts
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

export class AppComponent {
  public data!: DataManager;
  ngOnInit() {
    this.data = new DataManager({
      url: 'http://localhost:8000/api/lendings/',
      adaptor: new UrlAdaptor(),
      crossDomain: true
    });
  }
}
```

### Grid component configuration

Configure the Grid with columns and features such as paging, sorting, filtering, searching and editing in the **src/app/app.component.html**. The Grid uses the DataManager instance as its data source.

```html
<ejs-grid
  #grid
  [dataSource]="data"
  [allowPaging]="true"
  [allowSorting]="true"
  [allowFiltering]="true"
  gridLines="Both">
  <e-columns>
    <e-column field="record_id" headerText="Record ID" [isPrimaryKey]="true" [visible]="false"></e-column>
    <e-column field="book_title" headerText="Book Title" width="240"></e-column>
    <e-column field="isbn_number" headerText="ISBN Number" width="170"></e-column>
    <e-column field="author_name" headerText="Author Name" width="200"></e-column>
    <e-column field="genre" headerText="Genre" width="160"></e-column>
    <e-column field="borrower_name" headerText="Borrower Name" width="200"></e-column>
    <e-column field="borrower_email" headerText="Borrower Email" width="240"></e-column>
    <e-column field="borrowed_date" headerText="Borrowed Date" width="160" type="date" format="yMd"></e-column>
    <e-column field="expected_return_date" headerText="Expected Return Date" width="200" type="date" format="yMd"></e-column>
    <e-column field="actual_return_date" headerText="Actual Return Date" width="190" type="date" format="yMd"></e-column>
    <e-column field="lending_status" headerText="Lending Status" width="160"></e-column>
  </e-columns>
</ejs-grid>
```
---

## Performing data operation

This section describes how core data operations are processed between the Syncfusion Grid and Django REST Framework. It provides an overview of how user interactions in the Grid generate structured request payloads and how those payloads are interpreted on the server to build Django querysets that efficiently apply filtering, searching, sorting, and paging.

### Filtering

Filtering lets users narrow the dataset by applying conditions such as equals, not equals, contains, starts with, and similar operators, and by combining multiple conditions using logical AND and OR.

**How to enable in Grid**
1. Enable filtering by setting **[allowFiltering](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowfiltering)** to **true** on the Grid so that filter interactions are sent to the server.
2. Optionally configure the filtering user interface (for example, Menu, CheckBox, or Excel style) by setting the **[filterSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/filtersettingsmodel)** property to suit your preferred UX.

**DRF handling**

The Grid posts a nested `where` structure that represents the filter tree. The server converts this `where` structure into Django `Q` objects and applies them to the query set before sorting and paging, ensuring that only rows that satisfy the requested conditions are returned.

Create **library/services/datamanager/filters.py** file and add the content below:

**1) `filters.py` - Imports:**
Import typing/Django primitives and shared parsing helpers.

```python
from typing import Any, Dict, List, Optional, Type
from django.db import models
from django.db.models import Q
from .parsing import json_or_value, normalize_operator, to_bool, coerce_value_for_field

```

**2) Build Q for a single (leaf) predicate:**
Map a single leaf condition `{ field, operator, value }` to a Django `Q` filter.

```python
def build_q_from_leaf_predicate(model: Type[models.Model], predicate: Dict[str, Any]) -> Q:
    field_name: Optional[str] = predicate.get('field')
    operator_name: str = normalize_operator(predicate.get('operator'))
    raw_value: Any = predicate.get('value', None)
    ignore_case: bool = to_bool(predicate.get('ignoreCase'), True)
    if not field_name:
        return Q()
    coerced_value = coerce_value_for_field(model, field_name, raw_value)
    if operator_name in ('equal', 'eq'):
        lookup = field_name + ('__iexact' if ignore_case else '__exact')
        return Q(**{lookup: coerced_value})
    if operator_name in ('notequal', 'ne'):
        lookup = field_name + ('__iexact' if ignore_case else '__exact')
        return ~Q(**{lookup: coerced_value})
    if operator_name in ('contains',):
        lookup = field_name + ('__icontains' if ignore_case else '__contains')
        return Q(**{lookup: coerced_value})
    # ... map other operators (gt/gte/lt/lte/startswith/endswith/isnull, etc.) ...
    return Q()
```

**3) Combine nested `where` into one Q:**
Convert the nested `where` tree (AND/OR groups and leaves) to a single `Q` expression.

```python
def build_q_from_where(model: Type[models.Model], where_clause: Any) -> Q:
    if where_clause is None:
        return Q()
    where_clause = json_or_value(where_clause)
    if isinstance(where_clause, list):
        combined_q = Q()
        for predicate in where_clause:
            combined_q &= build_q_from_where(model, predicate)
        return combined_q
    if isinstance(where_clause, dict):
        is_complex: bool = where_clause.get('isComplex', False)
        if is_complex:
            condition: str = (where_clause.get('condition') or 'and').strip().lower()
            predicates_list: List[Dict[str, Any]] = where_clause.get('predicates') or []
            if condition == 'or':
                combined_or_q = Q(); has_any = False
                for child_predicate in predicates_list:
                    child_q = build_q_from_where(model, child_predicate)
                    if not has_any:
                        combined_or_q = child_q; has_any = True
                    else:
                        combined_or_q |= child_q
                return combined_or_q
            else:
                combined_and_q = Q()
                for child_predicate in predicates_list:
                    combined_and_q &= build_q_from_where(model, child_predicate)
                return combined_and_q
        else:
            return build_q_from_leaf_predicate(model, where_clause)
    return Q()
```

This will be invoked from the **library/services/datamanager/engine.py** which is can be found in the **Paging** section.

**How filtering works**
- The view set detects `DataManager` request and forwards the payload to "DataManagerEngine.read()".
- Inside "read()", the function "build_q_from_where()" converts the tree into Django `Q` predicates, and the query set is filtered before sorting and paging.

Below image shows the "filter" query passed to the DRF:

![Filter_Payload](../images/grid-django-filtering.png)

---

### Searching

Searching allows users to locate rows by supplying a term that can be checked against one or more fields, making it easy to find relevant records quickly.

**How to enable in Grid**
1. Add the `Search` toolbar item or call the Grid search API so that the Grid can generate search payloads.
2. Optionally specify the fields that should be searched to focus the search operation on the most meaningful columns for your scenario.

**DRF handling**

The Grid sends one or more search blocks, each containing a search term, an operator, and a list of target fields. The server expands the fields in each block into an OR condition and combines multiple blocks together using AND, producing a single `Q` predicate that can be applied to the query set before other operations.

Create **library/services/datamanager/search.py** file and add the content below:

**1) `search.py` - Imports:**
Bring in typing, Django ORM primitives, and helper functions.

```python
from typing import Any, Dict, List, Type
from django.db import models
from django.db.models import Q, QuerySet
from .parsing import json_or_value, normalize_operator, to_bool
from .filters import build_q_from_leaf_predicate
```

**2) Apply search blocks:**
Convert one or more search blocks into OR‑within / AND‑across `Q` predicates and filter the query set.

```python
def apply_search(queryset: QuerySet, payload: Dict[str, Any]) -> QuerySet:
    search_blocks = payload.get('search')
    if not search_blocks:
        return queryset
    search_blocks = json_or_value(search_blocks)
    if isinstance(search_blocks, dict):
        search_blocks = [search_blocks]
    if not isinstance(search_blocks, list) or not search_blocks:
        return queryset
    model: Type[models.Model] = queryset.model
    combined_and_q = Q()
    for block in search_blocks:
        fields_in_block: List[str] = block.get('fields') or []
        operator_name: str = normalize_operator(block.get('operator') or 'contains')
        search_term: Any = block.get('key') or block.get('searchKey')
        ignore_case: bool = to_bool(block.get('ignoreCase'), True)
        if not fields_in_block:
            single_field = block.get('field')
            if single_field:
                fields_in_block = [single_field]
        if not fields_in_block or search_term is None:
            continue
        block_or_q = Q()
        for field_name in fields_in_block:
            leaf_predicate = {
                'isComplex': False,
                'field': field_name,
                'operator': operator_name,
                'value': search_term,
                'ignoreCase': ignore_case,
            }
            block_or_q |= build_q_from_leaf_predicate(model, leaf_predicate)
        combined_and_q &= block_or_q
    return queryset.filter(combined_and_q) if combined_and_q else queryset
```

This will be invoked from the **library/services/datamanager/engine.py** which is can be found in the **Paging** section.

**How searching works**
- The view set forwards the request body to "DataManagerEngine.read()".
- The function "apply_search()" converts each block to `Q` clauses (OR within a block, AND across blocks) and filters the query set before subsequent operations.

Below image shows the "search" query passed to the DRF:

![Search_Payload](../images/grid-django-searching.png)
---

### Sorting

Sorting arranges the rows by one or more columns in ascending or descending order so that users can view the data in a logical sequence.

**How to enable in Grid**
1. Enable sorting by setting **[allowSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowsorting)** to **true** on the Grid so that sort changes are emitted.
2. If you want to allow multiple sort levels, enable multi‑sorting in the Grid configuration by setting the **[allowMultiSorting](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowmultisorting)** so that more than one field can define the order.

**DRF handling**

The Grid sends an ordered list of sort descriptors that specify the field and the direction for each level. The server maps these descriptors to Django `order_by()` fields, using a leading hyphen to indicate descending order, and applies them before any paging occurs.

Create **library/services/datamanager/sorting.py** file and add the content below:

```python
from typing import Any, List, Optional
from django.db.models import QuerySet

def apply_sorting(queryset: QuerySet, sort_descriptors: Any) -> QuerySet:
    if not isinstance(sort_descriptors, list) or not sort_descriptors:
        return queryset
    order_by_fields: List[str] = []
    for s in sort_descriptors:
        if not isinstance(s, dict):
            continue
        field: Optional[str] = s.get('name') or s.get('field')
        direction: str = (s.get('direction') or 'ascending').strip().lower()
        if field:
            prefix = '-' if direction == 'descending' else ''
            order_by_fields.append(prefix + field)
    return queryset.order_by(*order_by_fields) if order_by_fields else queryset
```
This will be invoked from the **library/services/datamanager/engine.py** which is can be found in the **Paging** section.

**How sorting works**
- "DataManagerEngine.read()" invokes "apply_sorting()" after searching and filtering.
- "apply_sorting()" builds an `order_by()` list and orders the query set prior to paging.

Below image shows the "sort" query passed to the DRF:

![Sort_Payload](../images/grid-django-sorting.png)
---

### Paging

Paging divides a large dataset into smaller segments by selecting a window of rows based on the requested starting offset and size.

**How to enable in Grid**
1. Turn on paging by setting **[allowPaging](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#allowpaging)** to **true** on the Grid so that requests include the `skip` and `take` values.
2. Configure `pageSettings` to define the page size and any other user‑experience options that matter to your design.

**DRF handling**

The server reads the `skip` and `take` values from the payload, computes the total number of matching rows before slicing, and returns the requested page. When the payload asks for counts, the response includes a `count` property in addition to the page of rows.

Create **library/services/datamanager/engine.py** file and add the single‑pass read orchestration below.

```python
from typing import Any, Dict, Tuple
from django.db.models import QuerySet
from .parsing import to_bool, json_or_value
from .search import apply_search
from .filters import build_q_from_where
from .sorting import apply_sorting

class DataManagerEngine:
    DM_READ_KEYS = {"requiresCounts", "skip", "take", "sorted", "where", "search", "select"}

    def is_dm_read(self, payload: Dict[str, Any]) -> bool:
        return any(key in payload for key in self.DM_READ_KEYS)

    def read(self, base_queryset: QuerySet, payload: Dict[str, Any]) -> Tuple[str, QuerySet, int, bool]:
        queryset = base_queryset
        queryset = apply_search(queryset, payload)
        where_filters = json_or_value(payload.get('where'))
        if where_filters:
            q_obj = build_q_from_where(queryset.model, where_filters)
            if q_obj:
                queryset = queryset.filter(q_obj)
        sort_descriptors = json_or_value(payload.get('sorted'))
        queryset = apply_sorting(queryset, sort_descriptors)
        try:
            skip = int(payload.get('skip', 0))
        except Exception:
            skip = 0
        try:
            take = int(payload.get('take', 12))
        except Exception:
            take = 12
        requires_counts = to_bool(payload.get('requiresCounts'), False)
        total_count = queryset.count()
        paged_queryset = queryset[skip: skip + take]
        return 'rows', paged_queryset, total_count, requires_counts
```

**How paging works**
- "read()" computes the total count after search/filter/sort, slices the query set using `skip`/`take`, and returns the current page plus the total when requested.

Below image shows the "page" query passed to the DRF:

![Page_Payload](../images/grid-django-paging.png)
---

## Performing CRUD operations

CRUD operations allow users to create, update, and delete rows directly in the Grid, with changes persisted to the database through DRF.

**How to enable in Grid**
1. Enable editing by configuring the Grid’s [editSettings](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#editsettings) with the required properties such as [allowAdding](https://ej2.syncfusion.com/angular/documentation/api/grid/editsettingsmodel#allowadding), [allowEditing](https://ej2.syncfusion.com/angular/documentation/api/grid/editsettingsmodel#allowediting), and [allowDeleting](https://ej2.syncfusion.com/angular/documentation/api/grid/editsettingsmodel#allowdeleting) so that the Grid can initiate add, edit, and delete actions from the toolbar or row UI.
2. Set one of the Grid columns as the primary key by configuring the column’s [isPrimaryKey](https://ej2.syncfusion.com/angular/documentation/api/grid/column#isprimarykey) property to true. This is mandatory for edit and delete operations to correctly identify records.
3. Include the Add, Edit, Delete, Update, and Cancel [toolbar](https://ej2.syncfusion.com/angular/documentation/api/grid/index-default#toolbar) items.

**DRF handling**

The ViewSet examines the incoming payload to identify the requested action and then routes the request to the handler function defined in `ej2_crud.py`. Each handler validates data using the serializer and executes the change within a database transaction to keep the data consistent even if an error occurs.

Include the following code to **library/services/ej2_crud.py**:

```python
def handle_crud_action(viewset, payload) -> Optional[Response]:
    """
    Dispatch UrlAdaptor CRUD by 'action' key.
    Returns a DRF Response when handled, otherwise None.
    """
    action = (payload.get('action') or '').lower()
    if action == 'insert':
        return _handle_insert(viewset, payload)
    if action == 'update':
        return _handle_update(viewset, payload)
    if action in ('remove', 'delete'):
        return _handle_remove(viewset, payload)
    return None
```

### Insert
Insert operation creates a new record in the database using the values provided from the Grid.

Include the following code to **library/services/ej2_crud.py**:

```python
from django.db import transaction
from rest_framework import status
from rest_framework.response import Response

def _handle_insert(viewset, payload) -> Response:
    record_data = payload.get('value') or payload
    serializer = viewset.get_serializer(data=record_data)
    serializer.is_valid(raise_exception=True)
    with transaction.atomic():
        viewset.perform_create(serializer)
        instance = serializer.instance
        if instance is not None:
            instance.refresh_from_db()
        output_data = viewset.get_serializer(instance).data
    return Response(output_data, status=status.HTTP_201_CREATED)
```

**How insert works**
- When a user creates a new record in the Grid, the Grid posts a payload that includes `action: 'insert'` and a `value` object that contains the new field values to be saved.
- The insert action calls the `_handle_insert()` function, which validates the values with the serializer and writes the record inside a database transaction to ensure consistency.
- After the record is created, `_handle_insert()` refreshes the instance from the database, serializes the completed row, and returns it so that the Grid can immediately display the new record with any server‑side defaults applied.

Below image shows the added data passed to the DRF:

![Add_Payload](../images/grid-django-crud-add.png)
---

### Update
Update operation modifies an existing record by applying the edited values sent from the Grid.

Include the following code to **library/services/ej2_crud.py**:

```python
from rest_framework import status
from rest_framework.response import Response

def _handle_update(viewset, payload) -> Response:
    record_id = payload.get('key') or payload.get('id') or payload.get('record_id')
    record_data = payload.get('value') or payload
    if record_id is None:
        return Response({'detail': 'Missing key for update.'}, status=status.HTTP_400_BAD_REQUEST)
    instance = viewset.get_queryset().filter(pk=record_id).first()
    if not instance:
        return Response({'detail': f'Record {record_id} not found.'}, status=status.HTTP_404_NOT_FOUND)
    serializer = viewset.get_serializer(instance, data=record_data, partial=False)
    serializer.is_valid(raise_exception=True)
    from django.db import transaction
    with transaction.atomic():
        viewset.perform_update(serializer)
        instance.refresh_from_db()
        output_data = viewset.get_serializer(instance).data
    return Response(output_data, status=status.HTTP_200_OK)
```

**How update works**
- When a user edits a record and saves the changes in the Grid, the Grid posts a payload that contains `action: 'update'`, the primary key in `key`, and the changed fields in `value`.
- The update action calls the `_handle_update()` function, which loads the targeted instance, validates the new values with the serializer, and persists the changes inside a transaction.
- After the update, `_handle_update()` refreshes the instance from the database, serializes the updated row, and returns it so that the Grid remains synchronized with the authoritative values stored on the server.

Below image shows the updated data passed to the DRF:

![Edit_Payload](../images/grid-django-crud-edit.png)
---

### Delete
Delete operation removes an existing record from the database based on the primary key provided by the Grid.

Include the following code to **library/services/ej2_crud.py**:

```python
from rest_framework import status
from rest_framework.response import Response

def _handle_remove(viewset, payload) -> Response:
    record_id = payload.get('key') or payload.get('id') or payload.get('record_id')
    if record_id is None:
        return Response({'detail': 'Missing key for delete.'}, status=status.HTTP_400_BAD_REQUEST)
    instance = viewset.get_queryset().filter(pk=record_id).first()
    if not instance:
        return Response({'detail': f'Record {record_id} not found.'}, status=status.HTTP_404_NOT_FOUND)
    deleted_payload = viewset.get_serializer(instance).data
    from django.db import transaction
    with transaction.atomic():
        viewset.perform_destroy(instance)
    return Response(deleted_payload, status=status.HTTP_200_OK)
```

**How delete works**
- When a user deletes a record in the Grid, the Grid posts a payload that specifies `action: 'remove'` together with the primary key that identifies the record to be deleted.
- The delete action calls the `_handle_remove()` function, which serializes the target instance, deletes it inside a transaction, and prepares a confirmation payload.
- The `_handle_remove()` function returns the confirmation payload to the client so that the Grid can remove the row from the UI and the user can see that the deletion has been completed successfully.

Below image shows the deleted key passed to the DRF:

![Delete_Payload](../images/grid-django-crud-delete.png)
---

## View set implementation

The final part is the View Set, which receives all incoming requests and routes them to the appropriate custom services. Update **library/views.py** with the following code to properly wire all services to the view set:

```python
from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import BookLending
from .serializers import BookLendingSerializer
from .services.datamanager.engine import DataManagerEngine
from .services.ej2_crud import handle_crud_action


class BookLendingViewSet(viewsets.ModelViewSet):
    queryset = BookLending.objects.all()
    serializer_class = BookLendingSerializer

    dm_engine = DataManagerEngine()

    def create(self, request, *args, **kwargs):
        payload = request.data

        # 1) DataManager READ via POST (initial load / filtering / sorting / paging / search / select)
        if self.dm_engine.is_dm_read(payload):
            mode, data, total_count, requires_counts = self.dm_engine.read(self.get_queryset(), payload)

            if mode == "values":
                # select-mode returns list[dict] (already projected)
                response_payload = {'result': data, 'count': total_count} if requires_counts else data
                return Response(response_payload, status=status.HTTP_200_OK)

            # rows-mode: serialize model instances
            serialized = self.get_serializer(data, many=True).data
            response_payload = {'result': serialized, 'count': total_count} if requires_counts else serialized
            return Response(response_payload, status=status.HTTP_200_OK)

        # 2) UrlAdaptor CRUD actions via POST
        crud_response = handle_crud_action(self, payload)
        if crud_response is not None:
            return crud_response

        # 3) Fallback: standard RESTful create
        serializer = self.get_serializer(data=payload)
        serializer.is_valid(raise_exception=True)
        with transaction.atomic():
            self.perform_create(serializer)
            instance = serializer.instance
            if instance is not None:
                instance.refresh_from_db()
            output_data = self.get_serializer(instance).data
        headers = self.get_success_headers(serializer.data)
        return Response(output_data, status=status.HTTP_201_CREATED, headers=headers)
```

## Running the application

Start the Django REST Framework development server after applying migrations so the API is reachable by the Angular client.

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 8000
```

In a separate terminal, start the Angular development server so the Grid can load and communicate with DRF.

```bash
ng serve
```
---

## GitHub sample

For a complete working implementation of this example, refer to the following GitHub repository:

[Syncfusion DataGrid with DRF Sample](https://github.com/SyncfusionExamples/connecting-databases-to-angular-grid/tree/master/Binding%20MS%20SQL%20database%20using%20Django%20and%20UrlAdaptor)

## Summary

This guide walks through the following key areas:

1. [Prerequisites](#prerequisites) - Review the tools, frameworks, and versions required to build the application.
2. [Setting up the Django REST Framework for Microsoft SQL Database](#setting-up-the-django-rest-framework-for-microsoft-sql-database) - Set up Django REST Framework and connect it to a Microsoft SQL Server database.
3. [Setting up the Angular application](#setting-up-the-angular-application) - Create and configure the Angular application with the Syncfusion Angular Grid.
4. [Performing data operation](#performing-data-operation) - Handle server‑side data operations such as filtering, searching, sorting, and paging.
5. [Perform CRUD operations](#performing-crud-operations) - Enable create, update, and delete operations from the Grid using DRF.
6. [View set implementation](#view-set-implementation) — Implement Django REST Framework view set to efficiently manage API endpoints and services.
7. [Running the application](#running-the-application) - Run the Django and Angular applications locally for development.
8. [GitHub sample](#github-sample) - Explore a complete working sample available on GitHub.

The application now offers a reliable, scalable solution for managing book lending records with a robust Django REST API on Microsoft SQL Server and a Syncfusion Angular Grid front end.