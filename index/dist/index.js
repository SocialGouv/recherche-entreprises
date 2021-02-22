module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4591:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'wait_for_completion_timeout', 'keep_alive', 'typed_keys', 'keep_on_completion', 'batched_reduce_size', 'request_cache', 'analyzer', 'analyze_wildcard', 'default_operator', 'df', 'explain', 'stored_fields', 'docvalue_fields', 'from', 'ignore_unavailable', 'ignore_throttled', 'allow_no_indices', 'expand_wildcards', 'lenient', 'preference', 'q', 'routing', 'search_type', 'size', 'sort', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'terminate_after', 'stats', 'suggest_field', 'suggest_mode', 'suggest_size', 'suggest_text', 'timeout', 'track_scores', 'track_total_hits', 'allow_partial_search_results', 'version', 'seq_no_primary_term', 'max_concurrent_shard_requests']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', waitForCompletionTimeout: 'wait_for_completion_timeout', keepAlive: 'keep_alive', typedKeys: 'typed_keys', keepOnCompletion: 'keep_on_completion', batchedReduceSize: 'batched_reduce_size', requestCache: 'request_cache', analyzeWildcard: 'analyze_wildcard', defaultOperator: 'default_operator', storedFields: 'stored_fields', docvalueFields: 'docvalue_fields', ignoreUnavailable: 'ignore_unavailable', ignoreThrottled: 'ignore_throttled', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', searchType: 'search_type', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', terminateAfter: 'terminate_after', suggestField: 'suggest_field', suggestMode: 'suggest_mode', suggestSize: 'suggest_size', suggestText: 'suggest_text', trackScores: 'track_scores', trackTotalHits: 'track_total_hits', allowPartialSearchResults: 'allow_partial_search_results', seqNoPrimaryTerm: 'seq_no_primary_term', maxConcurrentShardRequests: 'max_concurrent_shard_requests' }

function AsyncSearchApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

AsyncSearchApi.prototype.delete = function asyncSearchDeleteApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_async_search' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

AsyncSearchApi.prototype.get = function asyncSearchGetApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_async_search' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

AsyncSearchApi.prototype.status = function asyncSearchStatusApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_async_search' + '/' + 'status' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

AsyncSearchApi.prototype.submit = function asyncSearchSubmitApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_async_search'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_async_search'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = AsyncSearchApi


/***/ }),

/***/ 6734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function AutoscalingApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

AutoscalingApi.prototype.deleteAutoscalingPolicy = function autoscalingDeleteAutoscalingPolicyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_autoscaling' + '/' + 'policy' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

AutoscalingApi.prototype.getAutoscalingCapacity = function autoscalingGetAutoscalingCapacityApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_autoscaling' + '/' + 'capacity'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

AutoscalingApi.prototype.getAutoscalingPolicy = function autoscalingGetAutoscalingPolicyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_autoscaling' + '/' + 'policy' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

AutoscalingApi.prototype.putAutoscalingPolicy = function autoscalingPutAutoscalingPolicyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_autoscaling' + '/' + 'policy' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(AutoscalingApi.prototype, {
  delete_autoscaling_policy: { get () { return this.deleteAutoscalingPolicy } },
  get_autoscaling_capacity: { get () { return this.getAutoscalingCapacity } },
  get_autoscaling_policy: { get () { return this.getAutoscalingPolicy } },
  put_autoscaling_policy: { get () { return this.putAutoscalingPolicy } }
})

module.exports = AutoscalingApi


/***/ }),

/***/ 7106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['wait_for_active_shards', 'refresh', 'routing', 'timeout', 'type', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'pipeline', 'require_alias', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { waitForActiveShards: 'wait_for_active_shards', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', requireAlias: 'require_alias', errorTrace: 'error_trace', filterPath: 'filter_path' }

function bulkApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_bulk'
  } else if ((index) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_bulk'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_bulk'
  }

  // build request object
  const request = {
    method,
    path,
    bulkBody: body,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = bulkApi


/***/ }),

/***/ 203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['format', 'local', 'h', 'help', 's', 'v', 'expand_wildcards', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'bytes', 'master_timeout', 'fields', 'time', 'ts', 'health', 'pri', 'include_unloaded_segments', 'full_id', 'active_only', 'detailed', 'index', 'ignore_unavailable', 'nodes', 'actions', 'parent_task_id', 'size', 'allow_no_match', 'allow_no_datafeeds', 'allow_no_jobs', 'from']
const snakeCase = { expandWildcards: 'expand_wildcards', errorTrace: 'error_trace', filterPath: 'filter_path', masterTimeout: 'master_timeout', includeUnloadedSegments: 'include_unloaded_segments', fullId: 'full_id', activeOnly: 'active_only', ignoreUnavailable: 'ignore_unavailable', parentTaskId: 'parent_task_id', allowNoMatch: 'allow_no_match', allowNoDatafeeds: 'allow_no_datafeeds', allowNoJobs: 'allow_no_jobs' }

function CatApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

CatApi.prototype.aliases = function catAliasesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'aliases' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'aliases'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.allocation = function catAllocationApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, nodeId, node_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'allocation' + '/' + encodeURIComponent(node_id || nodeId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'allocation'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.count = function catCountApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'count' + '/' + encodeURIComponent(index)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'count'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.fielddata = function catFielddataApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, fields, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((fields) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'fielddata' + '/' + encodeURIComponent(fields)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'fielddata'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.health = function catHealthApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat' + '/' + 'health'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.help = function catHelpApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.indices = function catIndicesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'indices' + '/' + encodeURIComponent(index)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'indices'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.master = function catMasterApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat' + '/' + 'master'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.nodeattrs = function catNodeattrsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat' + '/' + 'nodeattrs'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.nodes = function catNodesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat' + '/' + 'nodes'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.pendingTasks = function catPendingTasksApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat' + '/' + 'pending_tasks'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.plugins = function catPluginsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat' + '/' + 'plugins'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.recovery = function catRecoveryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'recovery' + '/' + encodeURIComponent(index)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'recovery'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.repositories = function catRepositoriesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat' + '/' + 'repositories'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.segments = function catSegmentsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'segments' + '/' + encodeURIComponent(index)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'segments'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.shards = function catShardsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'shards' + '/' + encodeURIComponent(index)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'shards'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.snapshots = function catSnapshotsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, repository, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((repository) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'snapshots' + '/' + encodeURIComponent(repository)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'snapshots'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.tasks = function catTasksApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cat' + '/' + 'tasks'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.templates = function catTemplatesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'templates' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'templates'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.threadPool = function catThreadPoolApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, threadPoolPatterns, thread_pool_patterns, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((thread_pool_patterns || threadPoolPatterns) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'thread_pool' + '/' + encodeURIComponent(thread_pool_patterns || threadPoolPatterns)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'thread_pool'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.mlDataFrameAnalytics = function catMlDataFrameAnalyticsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'ml' + '/' + 'data_frame' + '/' + 'analytics'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.mlDatafeeds = function catMlDatafeedsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((datafeed_id || datafeedId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'ml' + '/' + 'datafeeds'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.mlJobs = function catMlJobsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((job_id || jobId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'ml' + '/' + 'anomaly_detectors'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.mlTrainedModels = function catMlTrainedModelsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, modelId, model_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((model_id || modelId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'ml' + '/' + 'trained_models' + '/' + encodeURIComponent(model_id || modelId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'ml' + '/' + 'trained_models'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CatApi.prototype.transforms = function catTransformsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, transformId, transform_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((transform_id || transformId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'transforms' + '/' + encodeURIComponent(transform_id || transformId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cat' + '/' + 'transforms'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(CatApi.prototype, {
  pending_tasks: { get () { return this.pendingTasks } },
  thread_pool: { get () { return this.threadPool } },
  ml_data_frame_analytics: { get () { return this.mlDataFrameAnalytics } },
  ml_datafeeds: { get () { return this.mlDatafeeds } },
  ml_jobs: { get () { return this.mlJobs } },
  ml_trained_models: { get () { return this.mlTrainedModels } }
})

module.exports = CatApi


/***/ }),

/***/ 1989:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'wait_for_active_shards']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', waitForActiveShards: 'wait_for_active_shards' }

function CcrApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

CcrApi.prototype.deleteAutoFollowPattern = function ccrDeleteAutoFollowPatternApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ccr' + '/' + 'auto_follow' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.follow = function ccrFollowApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + encodeURIComponent(index) + '/' + '_ccr' + '/' + 'follow'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.followInfo = function ccrFollowInfoApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + encodeURIComponent(index) + '/' + '_ccr' + '/' + 'info'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.followStats = function ccrFollowStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + encodeURIComponent(index) + '/' + '_ccr' + '/' + 'stats'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.forgetFollower = function ccrForgetFollowerApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_ccr' + '/' + 'forget_follower'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.getAutoFollowPattern = function ccrGetAutoFollowPatternApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ccr' + '/' + 'auto_follow' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ccr' + '/' + 'auto_follow'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.pauseAutoFollowPattern = function ccrPauseAutoFollowPatternApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ccr' + '/' + 'auto_follow' + '/' + encodeURIComponent(name) + '/' + 'pause'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.pauseFollow = function ccrPauseFollowApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_ccr' + '/' + 'pause_follow'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.putAutoFollowPattern = function ccrPutAutoFollowPatternApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ccr' + '/' + 'auto_follow' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.resumeAutoFollowPattern = function ccrResumeAutoFollowPatternApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ccr' + '/' + 'auto_follow' + '/' + encodeURIComponent(name) + '/' + 'resume'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.resumeFollow = function ccrResumeFollowApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_ccr' + '/' + 'resume_follow'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.stats = function ccrStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_ccr' + '/' + 'stats'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

CcrApi.prototype.unfollow = function ccrUnfollowApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_ccr' + '/' + 'unfollow'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(CcrApi.prototype, {
  delete_auto_follow_pattern: { get () { return this.deleteAutoFollowPattern } },
  follow_info: { get () { return this.followInfo } },
  follow_stats: { get () { return this.followStats } },
  forget_follower: { get () { return this.forgetFollower } },
  get_auto_follow_pattern: { get () { return this.getAutoFollowPattern } },
  pause_auto_follow_pattern: { get () { return this.pauseAutoFollowPattern } },
  pause_follow: { get () { return this.pauseFollow } },
  put_auto_follow_pattern: { get () { return this.putAutoFollowPattern } },
  resume_auto_follow_pattern: { get () { return this.resumeAutoFollowPattern } },
  resume_follow: { get () { return this.resumeFollow } }
})

module.exports = CcrApi


/***/ }),

/***/ 8704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function clearScrollApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, scrollId, scroll_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((scroll_id || scrollId) != null) {
    if (method == null) method = 'DELETE'
    path = '/' + '_search' + '/' + 'scroll' + '/' + encodeURIComponent(scroll_id || scrollId)
  } else {
    if (method == null) method = 'DELETE'
    path = '/' + '_search' + '/' + 'scroll'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = clearScrollApi


/***/ }),

/***/ 2025:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function closePointInTimeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_pit'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = closePointInTimeApi


/***/ }),

/***/ 145:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['include_yes_decisions', 'include_disk_info', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'timeout', 'master_timeout', 'wait_for_removal', 'local', 'flat_settings', 'include_defaults', 'expand_wildcards', 'level', 'wait_for_active_shards', 'wait_for_nodes', 'wait_for_events', 'wait_for_no_relocating_shards', 'wait_for_no_initializing_shards', 'wait_for_status', 'node_ids', 'node_names', 'create', 'dry_run', 'explain', 'retry_failed', 'metric', 'wait_for_metadata_version', 'wait_for_timeout', 'ignore_unavailable', 'allow_no_indices']
const snakeCase = { includeYesDecisions: 'include_yes_decisions', includeDiskInfo: 'include_disk_info', errorTrace: 'error_trace', filterPath: 'filter_path', masterTimeout: 'master_timeout', waitForRemoval: 'wait_for_removal', flatSettings: 'flat_settings', includeDefaults: 'include_defaults', expandWildcards: 'expand_wildcards', waitForActiveShards: 'wait_for_active_shards', waitForNodes: 'wait_for_nodes', waitForEvents: 'wait_for_events', waitForNoRelocatingShards: 'wait_for_no_relocating_shards', waitForNoInitializingShards: 'wait_for_no_initializing_shards', waitForStatus: 'wait_for_status', nodeIds: 'node_ids', nodeNames: 'node_names', dryRun: 'dry_run', retryFailed: 'retry_failed', waitForMetadataVersion: 'wait_for_metadata_version', waitForTimeout: 'wait_for_timeout', ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices' }

function ClusterApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

ClusterApi.prototype.allocationExplain = function clusterAllocationExplainApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + '_cluster' + '/' + 'allocation' + '/' + 'explain'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.deleteComponentTemplate = function clusterDeleteComponentTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_component_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.deleteVotingConfigExclusions = function clusterDeleteVotingConfigExclusionsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_cluster' + '/' + 'voting_config_exclusions'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.existsComponentTemplate = function clusterExistsComponentTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'HEAD'
  path = '/' + '_component_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.getComponentTemplate = function clusterGetComponentTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_component_template' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_component_template'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.getSettings = function clusterGetSettingsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cluster' + '/' + 'settings'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.health = function clusterHealthApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'health' + '/' + encodeURIComponent(index)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'health'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.pendingTasks = function clusterPendingTasksApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_cluster' + '/' + 'pending_tasks'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.postVotingConfigExclusions = function clusterPostVotingConfigExclusionsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_cluster' + '/' + 'voting_config_exclusions'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.putComponentTemplate = function clusterPutComponentTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_component_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.putSettings = function clusterPutSettingsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_cluster' + '/' + 'settings'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.remoteInfo = function clusterRemoteInfoApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_remote' + '/' + 'info'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.reroute = function clusterRerouteApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_cluster' + '/' + 'reroute'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.state = function clusterStateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required url components
  if (params['index'] != null && (params['metric'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: metric')
    return handleError(err, callback)
  }

  var { method, body, metric, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((metric) != null && (index) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'state' + '/' + encodeURIComponent(metric) + '/' + encodeURIComponent(index)
  } else if ((metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'state' + '/' + encodeURIComponent(metric)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'state'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

ClusterApi.prototype.stats = function clusterStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, nodeId, node_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'stats' + '/' + 'nodes' + '/' + encodeURIComponent(node_id || nodeId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(ClusterApi.prototype, {
  allocation_explain: { get () { return this.allocationExplain } },
  delete_component_template: { get () { return this.deleteComponentTemplate } },
  delete_voting_config_exclusions: { get () { return this.deleteVotingConfigExclusions } },
  exists_component_template: { get () { return this.existsComponentTemplate } },
  get_component_template: { get () { return this.getComponentTemplate } },
  get_settings: { get () { return this.getSettings } },
  pending_tasks: { get () { return this.pendingTasks } },
  post_voting_config_exclusions: { get () { return this.postVotingConfigExclusions } },
  put_component_template: { get () { return this.putComponentTemplate } },
  put_settings: { get () { return this.putSettings } },
  remote_info: { get () { return this.remoteInfo } }
})

module.exports = ClusterApi


/***/ }),

/***/ 8655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['ignore_unavailable', 'ignore_throttled', 'allow_no_indices', 'expand_wildcards', 'min_score', 'preference', 'routing', 'q', 'analyzer', 'analyze_wildcard', 'default_operator', 'df', 'lenient', 'terminate_after', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { ignoreUnavailable: 'ignore_unavailable', ignoreThrottled: 'ignore_throttled', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', minScore: 'min_score', analyzeWildcard: 'analyze_wildcard', defaultOperator: 'default_operator', terminateAfter: 'terminate_after', errorTrace: 'error_trace', filterPath: 'filter_path' }

function countApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_count'
  } else if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_count'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_count'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = countApi


/***/ }),

/***/ 4352:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['wait_for_active_shards', 'refresh', 'routing', 'timeout', 'version', 'version_type', 'pipeline', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { waitForActiveShards: 'wait_for_active_shards', versionType: 'version_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function createApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id) + '/' + '_create'
  } else {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_create' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = createApi


/***/ }),

/***/ 2645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['accept_data_loss', 'timeout', 'master_timeout', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { acceptDataLoss: 'accept_data_loss', masterTimeout: 'master_timeout', errorTrace: 'error_trace', filterPath: 'filter_path' }

function DanglingIndicesApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

DanglingIndicesApi.prototype.deleteDanglingIndex = function danglingIndicesDeleteDanglingIndexApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index_uuid'] == null && params['indexUuid'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index_uuid or indexUuid')
    return handleError(err, callback)
  }

  var { method, body, indexUuid, index_uuid, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_dangling' + '/' + encodeURIComponent(index_uuid || indexUuid)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

DanglingIndicesApi.prototype.importDanglingIndex = function danglingIndicesImportDanglingIndexApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index_uuid'] == null && params['indexUuid'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index_uuid or indexUuid')
    return handleError(err, callback)
  }

  var { method, body, indexUuid, index_uuid, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_dangling' + '/' + encodeURIComponent(index_uuid || indexUuid)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

DanglingIndicesApi.prototype.listDanglingIndices = function danglingIndicesListDanglingIndicesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_dangling'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(DanglingIndicesApi.prototype, {
  delete_dangling_index: { get () { return this.deleteDanglingIndex } },
  import_dangling_index: { get () { return this.importDanglingIndex } },
  list_dangling_indices: { get () { return this.listDanglingIndices } }
})

module.exports = DanglingIndicesApi


/***/ }),

/***/ 2870:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['wait_for_active_shards', 'refresh', 'routing', 'timeout', 'if_seq_no', 'if_primary_term', 'version', 'version_type', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { waitForActiveShards: 'wait_for_active_shards', ifSeqNo: 'if_seq_no', ifPrimaryTerm: 'if_primary_term', versionType: 'version_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function deleteApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = 'DELETE'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = 'DELETE'
    path = '/' + encodeURIComponent(index) + '/' + '_doc' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = deleteApi


/***/ }),

/***/ 2489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['analyzer', 'analyze_wildcard', 'default_operator', 'df', 'from', 'ignore_unavailable', 'allow_no_indices', 'conflicts', 'expand_wildcards', 'lenient', 'preference', 'q', 'routing', 'scroll', 'search_type', 'search_timeout', 'size', 'max_docs', 'sort', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'terminate_after', 'stats', 'version', 'request_cache', 'refresh', 'timeout', 'wait_for_active_shards', 'scroll_size', 'wait_for_completion', 'requests_per_second', 'slices', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { analyzeWildcard: 'analyze_wildcard', defaultOperator: 'default_operator', ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', searchType: 'search_type', searchTimeout: 'search_timeout', maxDocs: 'max_docs', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', terminateAfter: 'terminate_after', requestCache: 'request_cache', waitForActiveShards: 'wait_for_active_shards', scrollSize: 'scroll_size', waitForCompletion: 'wait_for_completion', requestsPerSecond: 'requests_per_second', errorTrace: 'error_trace', filterPath: 'filter_path' }

function deleteByQueryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_delete_by_query'
  } else {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_delete_by_query'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = deleteByQueryApi


/***/ }),

/***/ 2729:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['requests_per_second', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { requestsPerSecond: 'requests_per_second', errorTrace: 'error_trace', filterPath: 'filter_path' }

function deleteByQueryRethrottleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['task_id'] == null && params['taskId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: task_id or taskId')
    return handleError(err, callback)
  }
  if (params['requests_per_second'] == null && params['requestsPerSecond'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: requests_per_second or requestsPerSecond')
    return handleError(err, callback)
  }

  var { method, body, taskId, task_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_delete_by_query' + '/' + encodeURIComponent(task_id || taskId) + '/' + '_rethrottle'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = deleteByQueryRethrottleApi


/***/ }),

/***/ 4390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['timeout', 'master_timeout', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { masterTimeout: 'master_timeout', errorTrace: 'error_trace', filterPath: 'filter_path' }

function deleteScriptApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_scripts' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = deleteScriptApi


/***/ }),

/***/ 2126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'wait_for_completion']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', waitForCompletion: 'wait_for_completion' }

function EnrichApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

EnrichApi.prototype.deletePolicy = function enrichDeletePolicyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_enrich' + '/' + 'policy' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

EnrichApi.prototype.executePolicy = function enrichExecutePolicyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_enrich' + '/' + 'policy' + '/' + encodeURIComponent(name) + '/' + '_execute'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

EnrichApi.prototype.getPolicy = function enrichGetPolicyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_enrich' + '/' + 'policy' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_enrich' + '/' + 'policy'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

EnrichApi.prototype.putPolicy = function enrichPutPolicyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_enrich' + '/' + 'policy' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

EnrichApi.prototype.stats = function enrichStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_enrich' + '/' + '_stats'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(EnrichApi.prototype, {
  delete_policy: { get () { return this.deletePolicy } },
  execute_policy: { get () { return this.executePolicy } },
  get_policy: { get () { return this.getPolicy } },
  put_policy: { get () { return this.putPolicy } }
})

module.exports = EnrichApi


/***/ }),

/***/ 8662:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'wait_for_completion_timeout', 'keep_alive', 'keep_on_completion']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', waitForCompletionTimeout: 'wait_for_completion_timeout', keepAlive: 'keep_alive', keepOnCompletion: 'keep_on_completion' }

function EqlApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

EqlApi.prototype.delete = function eqlDeleteApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_eql' + '/' + 'search' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

EqlApi.prototype.get = function eqlGetApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_eql' + '/' + 'search' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

EqlApi.prototype.search = function eqlSearchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_eql' + '/' + 'search'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = EqlApi


/***/ }),

/***/ 7343:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['stored_fields', 'preference', 'realtime', 'refresh', 'routing', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'version', 'version_type', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { storedFields: 'stored_fields', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', versionType: 'version_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function existsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = 'HEAD'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = 'HEAD'
    path = '/' + encodeURIComponent(index) + '/' + '_doc' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = existsApi


/***/ }),

/***/ 7645:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['preference', 'realtime', 'refresh', 'routing', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'version', 'version_type', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', versionType: 'version_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function existsSourceApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  // check required url components
  if (params['id'] != null && (params['type'] == null || params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: type, index')
    return handleError(err, callback)
  } else if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = 'HEAD'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id) + '/' + '_source'
  } else {
    if (method == null) method = 'HEAD'
    path = '/' + encodeURIComponent(index) + '/' + '_source' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = existsSourceApi


/***/ }),

/***/ 8847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['analyze_wildcard', 'analyzer', 'default_operator', 'df', 'stored_fields', 'lenient', 'preference', 'q', 'routing', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { analyzeWildcard: 'analyze_wildcard', defaultOperator: 'default_operator', storedFields: 'stored_fields', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', errorTrace: 'error_trace', filterPath: 'filter_path' }

function explainApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id) + '/' + '_explain'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_explain' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = explainApi


/***/ }),

/***/ 2683:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['fields', 'ignore_unavailable', 'allow_no_indices', 'expand_wildcards', 'include_unmapped', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', includeUnmapped: 'include_unmapped', errorTrace: 'error_trace', filterPath: 'filter_path' }

function fieldCapsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_field_caps'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_field_caps'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = fieldCapsApi


/***/ }),

/***/ 8034:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['stored_fields', 'preference', 'realtime', 'refresh', 'routing', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'version', 'version_type', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { storedFields: 'stored_fields', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', versionType: 'version_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function getApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_doc' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = getApi


/***/ }),

/***/ 1483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['master_timeout', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { masterTimeout: 'master_timeout', errorTrace: 'error_trace', filterPath: 'filter_path' }

function getScriptApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_scripts' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = getScriptApi


/***/ }),

/***/ 3727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function getScriptContextApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_script_context'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = getScriptContextApi


/***/ }),

/***/ 8740:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function getScriptLanguagesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_script_language'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = getScriptLanguagesApi


/***/ }),

/***/ 1338:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['preference', 'realtime', 'refresh', 'routing', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'version', 'version_type', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', versionType: 'version_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function getSourceApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id) + '/' + '_source'
  } else {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_source' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = getSourceApi


/***/ }),

/***/ 3238:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['routing', 'timeout', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function GraphApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

GraphApi.prototype.explore = function graphExploreApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_graph' + '/' + 'explore'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_graph' + '/' + 'explore'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = GraphApi


/***/ }),

/***/ 7293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'only_managed', 'only_errors']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', onlyManaged: 'only_managed', onlyErrors: 'only_errors' }

function IlmApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

IlmApi.prototype.deleteLifecycle = function ilmDeleteLifecycleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['policy'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: policy')
    return handleError(err, callback)
  }

  var { method, body, policy, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ilm' + '/' + 'policy' + '/' + encodeURIComponent(policy)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.explainLifecycle = function ilmExplainLifecycleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + encodeURIComponent(index) + '/' + '_ilm' + '/' + 'explain'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.getLifecycle = function ilmGetLifecycleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, policy, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((policy) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ilm' + '/' + 'policy' + '/' + encodeURIComponent(policy)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ilm' + '/' + 'policy'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.getStatus = function ilmGetStatusApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_ilm' + '/' + 'status'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.moveToStep = function ilmMoveToStepApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ilm' + '/' + 'move' + '/' + encodeURIComponent(index)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.putLifecycle = function ilmPutLifecycleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['policy'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: policy')
    return handleError(err, callback)
  }

  var { method, body, policy, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ilm' + '/' + 'policy' + '/' + encodeURIComponent(policy)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.removePolicy = function ilmRemovePolicyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_ilm' + '/' + 'remove'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.retry = function ilmRetryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_ilm' + '/' + 'retry'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.start = function ilmStartApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ilm' + '/' + 'start'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IlmApi.prototype.stop = function ilmStopApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ilm' + '/' + 'stop'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(IlmApi.prototype, {
  delete_lifecycle: { get () { return this.deleteLifecycle } },
  explain_lifecycle: { get () { return this.explainLifecycle } },
  get_lifecycle: { get () { return this.getLifecycle } },
  get_status: { get () { return this.getStatus } },
  move_to_step: { get () { return this.moveToStep } },
  put_lifecycle: { get () { return this.putLifecycle } },
  remove_policy: { get () { return this.removePolicy } }
})

module.exports = IlmApi


/***/ }),

/***/ 549:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['wait_for_active_shards', 'op_type', 'refresh', 'routing', 'timeout', 'version', 'version_type', 'if_seq_no', 'if_primary_term', 'pipeline', 'require_alias', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { waitForActiveShards: 'wait_for_active_shards', opType: 'op_type', versionType: 'version_type', ifSeqNo: 'if_seq_no', ifPrimaryTerm: 'if_primary_term', requireAlias: 'require_alias', errorTrace: 'error_trace', filterPath: 'filter_path' }

function indexApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id)
  } else if ((index) != null && (id) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_doc' + '/' + encodeURIComponent(id)
  } else if ((index) != null && (type) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type)
  } else {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_doc'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = indexApi


/***/ }),

/***/ 3835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['timeout', 'master_timeout', 'ignore_unavailable', 'allow_no_indices', 'expand_wildcards', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'index', 'fielddata', 'fields', 'query', 'request', 'wait_for_active_shards', 'include_type_name', 'local', 'flat_settings', 'include_defaults', 'force', 'wait_if_ongoing', 'flush', 'max_num_segments', 'only_expunge_deletes', 'create', 'cause', 'write_index_only', 'preserve_existing', 'order', 'detailed', 'active_only', 'dry_run', 'verbose', 'status', 'copy_settings', 'completion_fields', 'fielddata_fields', 'groups', 'level', 'types', 'include_segment_file_sizes', 'include_unloaded_segments', 'forbid_closed_indices', 'wait_for_completion', 'only_ancient_segments', 'explain', 'q', 'analyzer', 'analyze_wildcard', 'default_operator', 'df', 'lenient', 'rewrite', 'all_shards']
const snakeCase = { masterTimeout: 'master_timeout', ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', errorTrace: 'error_trace', filterPath: 'filter_path', waitForActiveShards: 'wait_for_active_shards', includeTypeName: 'include_type_name', flatSettings: 'flat_settings', includeDefaults: 'include_defaults', waitIfOngoing: 'wait_if_ongoing', maxNumSegments: 'max_num_segments', onlyExpungeDeletes: 'only_expunge_deletes', writeIndexOnly: 'write_index_only', preserveExisting: 'preserve_existing', activeOnly: 'active_only', dryRun: 'dry_run', copySettings: 'copy_settings', completionFields: 'completion_fields', fielddataFields: 'fielddata_fields', includeSegmentFileSizes: 'include_segment_file_sizes', includeUnloadedSegments: 'include_unloaded_segments', forbidClosedIndices: 'forbid_closed_indices', waitForCompletion: 'wait_for_completion', onlyAncientSegments: 'only_ancient_segments', analyzeWildcard: 'analyze_wildcard', defaultOperator: 'default_operator', allShards: 'all_shards' }

function IndicesApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

IndicesApi.prototype.addBlock = function indicesAddBlockApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['block'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: block')
    return handleError(err, callback)
  }

  // check required url components
  if (params['block'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, block, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + encodeURIComponent(index) + '/' + '_block' + '/' + encodeURIComponent(block)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.analyze = function indicesAnalyzeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_analyze'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_analyze'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.clearCache = function indicesClearCacheApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_cache' + '/' + 'clear'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_cache' + '/' + 'clear'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.clone = function indicesCloneApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['target'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: target')
    return handleError(err, callback)
  }

  // check required url components
  if (params['target'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, target, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + encodeURIComponent(index) + '/' + '_clone' + '/' + encodeURIComponent(target)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.close = function indicesCloseApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_close'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.create = function indicesCreateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + encodeURIComponent(index)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.delete = function indicesDeleteApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + encodeURIComponent(index)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.deleteAlias = function indicesDeleteAliasApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  // check required url components
  if (params['name'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (name) != null) {
    if (method == null) method = 'DELETE'
    path = '/' + encodeURIComponent(index) + '/' + '_alias' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'DELETE'
    path = '/' + encodeURIComponent(index) + '/' + '_aliases' + '/' + encodeURIComponent(name)
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.deleteIndexTemplate = function indicesDeleteIndexTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_index_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.deleteTemplate = function indicesDeleteTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.exists = function indicesExistsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'HEAD'
  path = '/' + encodeURIComponent(index)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.existsAlias = function indicesExistsAliasApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (name) != null) {
    if (method == null) method = 'HEAD'
    path = '/' + encodeURIComponent(index) + '/' + '_alias' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'HEAD'
    path = '/' + '_alias' + '/' + encodeURIComponent(name)
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.existsIndexTemplate = function indicesExistsIndexTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'HEAD'
  path = '/' + '_index_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.existsTemplate = function indicesExistsTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'HEAD'
  path = '/' + '_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.existsType = function indicesExistsTypeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['type'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: type')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'HEAD'
  path = '/' + encodeURIComponent(index) + '/' + '_mapping' + '/' + encodeURIComponent(type)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.flush = function indicesFlushApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_flush'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_flush'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.flushSynced = function indicesFlushSyncedApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_flush' + '/' + 'synced'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.forcemerge = function indicesForcemergeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_forcemerge'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_forcemerge'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.get = function indicesGetApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + encodeURIComponent(index)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.getAlias = function indicesGetAliasApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (name) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_alias' + '/' + encodeURIComponent(name)
  } else if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_alias' + '/' + encodeURIComponent(name)
  } else if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_alias'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_alias'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.getFieldMapping = function indicesGetFieldMappingApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['fields'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: fields')
    return handleError(err, callback)
  }

  var { method, body, fields, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (fields) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_mapping' + '/' + encodeURIComponent(type) + '/' + 'field' + '/' + encodeURIComponent(fields)
  } else if ((index) != null && (fields) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_mapping' + '/' + 'field' + '/' + encodeURIComponent(fields)
  } else if ((type) != null && (fields) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_mapping' + '/' + encodeURIComponent(type) + '/' + 'field' + '/' + encodeURIComponent(fields)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_mapping' + '/' + 'field' + '/' + encodeURIComponent(fields)
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.getIndexTemplate = function indicesGetIndexTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_index_template' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_index_template'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.getMapping = function indicesGetMappingApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_mapping' + '/' + encodeURIComponent(type)
  } else if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_mapping'
  } else if ((type) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_mapping' + '/' + encodeURIComponent(type)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_mapping'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.getSettings = function indicesGetSettingsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (name) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_settings' + '/' + encodeURIComponent(name)
  } else if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_settings'
  } else if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_settings' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_settings'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.getTemplate = function indicesGetTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_template' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_template'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.getUpgrade = function indicesGetUpgradeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + encodeURIComponent(index) + '/' + '_upgrade'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.open = function indicesOpenApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_open'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.putAlias = function indicesPutAliasApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  // check required url components
  if (params['name'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (name) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_alias' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_aliases' + '/' + encodeURIComponent(name)
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.putIndexTemplate = function indicesPutIndexTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_index_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.putMapping = function indicesPutMappingApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_mapping'
  } else if ((index) != null && (type) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_mapping' + '/' + encodeURIComponent(type)
  } else if ((index) != null && (type) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_mappings'
  } else if ((index) != null && (type) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_mappings' + '/' + encodeURIComponent(type)
  } else if ((index) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_mapping'
  } else if ((type) != null) {
    if (method == null) method = 'PUT'
    path = '/' + '_mappings' + '/' + encodeURIComponent(type)
  } else if ((index) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_mappings'
  } else {
    if (method == null) method = 'PUT'
    path = '/' + '_mapping' + '/' + encodeURIComponent(type)
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.putSettings = function indicesPutSettingsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'PUT'
    path = '/' + encodeURIComponent(index) + '/' + '_settings'
  } else {
    if (method == null) method = 'PUT'
    path = '/' + '_settings'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.putTemplate = function indicesPutTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_template' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.recovery = function indicesRecoveryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_recovery'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_recovery'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.refresh = function indicesRefreshApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_refresh'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_refresh'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.resolveIndex = function indicesResolveIndexApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_resolve' + '/' + 'index' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.rollover = function indicesRolloverApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['alias'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: alias')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['new_index'] != null || params['newIndex'] != null) && (params['alias'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: alias')
    return handleError(err, callback)
  }

  var { method, body, alias, newIndex, new_index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((alias) != null && (new_index || newIndex) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(alias) + '/' + '_rollover' + '/' + encodeURIComponent(new_index || newIndex)
  } else {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(alias) + '/' + '_rollover'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.segments = function indicesSegmentsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_segments'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_segments'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.shardStores = function indicesShardStoresApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_shard_stores'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_shard_stores'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.shrink = function indicesShrinkApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['target'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: target')
    return handleError(err, callback)
  }

  // check required url components
  if (params['target'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, target, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + encodeURIComponent(index) + '/' + '_shrink' + '/' + encodeURIComponent(target)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.simulateIndexTemplate = function indicesSimulateIndexTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_index_template' + '/' + '_simulate_index' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.simulateTemplate = function indicesSimulateTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'POST'
    path = '/' + '_index_template' + '/' + '_simulate' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_index_template' + '/' + '_simulate'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.split = function indicesSplitApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['target'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: target')
    return handleError(err, callback)
  }

  // check required url components
  if (params['target'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, target, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + encodeURIComponent(index) + '/' + '_split' + '/' + encodeURIComponent(target)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.stats = function indicesStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, metric, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_stats' + '/' + encodeURIComponent(metric)
  } else if ((metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_stats' + '/' + encodeURIComponent(metric)
  } else if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_stats'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.updateAliases = function indicesUpdateAliasesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_aliases'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.upgrade = function indicesUpgradeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_upgrade'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.validateQuery = function indicesValidateQueryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_validate' + '/' + 'query'
  } else if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_validate' + '/' + 'query'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_validate' + '/' + 'query'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.createDataStream = function indicesCreateDataStreamApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_data_stream' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.dataStreamsStats = function indicesDataStreamsStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_data_stream' + '/' + encodeURIComponent(name) + '/' + '_stats'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_data_stream' + '/' + '_stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.deleteDataStream = function indicesDeleteDataStreamApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_data_stream' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.freeze = function indicesFreezeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_freeze'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.getDataStream = function indicesGetDataStreamApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_data_stream' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_data_stream'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.migrateToDataStream = function indicesMigrateToDataStreamApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_data_stream' + '/' + '_migrate' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.promoteDataStream = function indicesPromoteDataStreamApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_data_stream' + '/' + '_promote' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.reloadSearchAnalyzers = function indicesReloadSearchAnalyzersApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_reload_search_analyzers'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IndicesApi.prototype.unfreeze = function indicesUnfreezeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_unfreeze'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(IndicesApi.prototype, {
  add_block: { get () { return this.addBlock } },
  clear_cache: { get () { return this.clearCache } },
  delete_alias: { get () { return this.deleteAlias } },
  delete_index_template: { get () { return this.deleteIndexTemplate } },
  delete_template: { get () { return this.deleteTemplate } },
  exists_alias: { get () { return this.existsAlias } },
  exists_index_template: { get () { return this.existsIndexTemplate } },
  exists_template: { get () { return this.existsTemplate } },
  exists_type: { get () { return this.existsType } },
  flush_synced: { get () { return this.flushSynced } },
  get_alias: { get () { return this.getAlias } },
  get_field_mapping: { get () { return this.getFieldMapping } },
  get_index_template: { get () { return this.getIndexTemplate } },
  get_mapping: { get () { return this.getMapping } },
  get_settings: { get () { return this.getSettings } },
  get_template: { get () { return this.getTemplate } },
  get_upgrade: { get () { return this.getUpgrade } },
  put_alias: { get () { return this.putAlias } },
  put_index_template: { get () { return this.putIndexTemplate } },
  put_mapping: { get () { return this.putMapping } },
  put_settings: { get () { return this.putSettings } },
  put_template: { get () { return this.putTemplate } },
  resolve_index: { get () { return this.resolveIndex } },
  shard_stores: { get () { return this.shardStores } },
  simulate_index_template: { get () { return this.simulateIndexTemplate } },
  simulate_template: { get () { return this.simulateTemplate } },
  update_aliases: { get () { return this.updateAliases } },
  validate_query: { get () { return this.validateQuery } },
  create_data_stream: { get () { return this.createDataStream } },
  data_streams_stats: { get () { return this.dataStreamsStats } },
  delete_data_stream: { get () { return this.deleteDataStream } },
  get_data_stream: { get () { return this.getDataStream } },
  migrate_to_data_stream: { get () { return this.migrateToDataStream } },
  promote_data_stream: { get () { return this.promoteDataStream } },
  reload_search_analyzers: { get () { return this.reloadSearchAnalyzers } }
})

module.exports = IndicesApi


/***/ }),

/***/ 7927:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function infoApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = infoApi


/***/ }),

/***/ 521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['master_timeout', 'timeout', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'verbose']
const snakeCase = { masterTimeout: 'master_timeout', errorTrace: 'error_trace', filterPath: 'filter_path' }

function IngestApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

IngestApi.prototype.deletePipeline = function ingestDeletePipelineApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ingest' + '/' + 'pipeline' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IngestApi.prototype.getPipeline = function ingestGetPipelineApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ingest' + '/' + 'pipeline' + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ingest' + '/' + 'pipeline'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IngestApi.prototype.processorGrok = function ingestProcessorGrokApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_ingest' + '/' + 'processor' + '/' + 'grok'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

IngestApi.prototype.putPipeline = function ingestPutPipelineApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ingest' + '/' + 'pipeline' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

IngestApi.prototype.simulate = function ingestSimulateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ingest' + '/' + 'pipeline' + '/' + encodeURIComponent(id) + '/' + '_simulate'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ingest' + '/' + 'pipeline' + '/' + '_simulate'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(IngestApi.prototype, {
  delete_pipeline: { get () { return this.deletePipeline } },
  get_pipeline: { get () { return this.getPipeline } },
  processor_grok: { get () { return this.processorGrok } },
  put_pipeline: { get () { return this.putPipeline } }
})

module.exports = IngestApi


/***/ }),

/***/ 4766:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'local', 'accept_enterprise', 'acknowledge', 'type']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', acceptEnterprise: 'accept_enterprise' }

function LicenseApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

LicenseApi.prototype.delete = function licenseDeleteApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_license'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

LicenseApi.prototype.get = function licenseGetApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_license'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

LicenseApi.prototype.getBasicStatus = function licenseGetBasicStatusApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_license' + '/' + 'basic_status'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

LicenseApi.prototype.getTrialStatus = function licenseGetTrialStatusApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_license' + '/' + 'trial_status'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

LicenseApi.prototype.post = function licensePostApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_license'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

LicenseApi.prototype.postStartBasic = function licensePostStartBasicApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_license' + '/' + 'start_basic'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

LicenseApi.prototype.postStartTrial = function licensePostStartTrialApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_license' + '/' + 'start_trial'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(LicenseApi.prototype, {
  get_basic_status: { get () { return this.getBasicStatus } },
  get_trial_status: { get () { return this.getTrialStatus } },
  post_start_basic: { get () { return this.postStartBasic } },
  post_start_trial: { get () { return this.postStartTrial } }
})

module.exports = LicenseApi


/***/ }),

/***/ 4774:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['stored_fields', 'preference', 'realtime', 'refresh', 'routing', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { storedFields: 'stored_fields', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', errorTrace: 'error_trace', filterPath: 'filter_path' }

function mgetApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_mget'
  } else if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_mget'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_mget'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = mgetApi


/***/ }),

/***/ 6960:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function MigrationApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

MigrationApi.prototype.deprecations = function migrationDeprecationsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_migration' + '/' + 'deprecations'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_migration' + '/' + 'deprecations'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = MigrationApi


/***/ }),

/***/ 4520:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['allow_no_match', 'allow_no_jobs', 'force', 'timeout', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'requests_per_second', 'allow_no_forecasts', 'wait_for_completion', 'lines_to_sample', 'line_merge_size_limit', 'charset', 'format', 'has_header_row', 'column_names', 'delimiter', 'quote', 'should_trim_fields', 'grok_pattern', 'timestamp_field', 'timestamp_format', 'explain', 'calc_interim', 'start', 'end', 'advance_time', 'skip_time', 'duration', 'expires_in', 'max_model_memory', 'expand', 'exclude_interim', 'from', 'size', 'anomaly_score', 'sort', 'desc', 'job_id', 'partition_field_value', 'exclude_generated', 'verbose', 'allow_no_datafeeds', 'influencer_score', 'top_n', 'bucket_span', 'overall_score', 'record_score', 'include', 'include_model_definition', 'decompress_definition', 'tags', 'reset_start', 'reset_end', 'ignore_unavailable', 'allow_no_indices', 'ignore_throttled', 'expand_wildcards', 'delete_intervening_results', 'enabled']
const snakeCase = { allowNoMatch: 'allow_no_match', allowNoJobs: 'allow_no_jobs', errorTrace: 'error_trace', filterPath: 'filter_path', requestsPerSecond: 'requests_per_second', allowNoForecasts: 'allow_no_forecasts', waitForCompletion: 'wait_for_completion', linesToSample: 'lines_to_sample', lineMergeSizeLimit: 'line_merge_size_limit', hasHeaderRow: 'has_header_row', columnNames: 'column_names', shouldTrimFields: 'should_trim_fields', grokPattern: 'grok_pattern', timestampField: 'timestamp_field', timestampFormat: 'timestamp_format', calcInterim: 'calc_interim', advanceTime: 'advance_time', skipTime: 'skip_time', expiresIn: 'expires_in', maxModelMemory: 'max_model_memory', excludeInterim: 'exclude_interim', anomalyScore: 'anomaly_score', jobId: 'job_id', partitionFieldValue: 'partition_field_value', excludeGenerated: 'exclude_generated', allowNoDatafeeds: 'allow_no_datafeeds', influencerScore: 'influencer_score', topN: 'top_n', bucketSpan: 'bucket_span', overallScore: 'overall_score', recordScore: 'record_score', includeModelDefinition: 'include_model_definition', decompressDefinition: 'decompress_definition', resetStart: 'reset_start', resetEnd: 'reset_end', ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices', ignoreThrottled: 'ignore_throttled', expandWildcards: 'expand_wildcards', deleteInterveningResults: 'delete_intervening_results' }

function MlApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

MlApi.prototype.closeJob = function mlCloseJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_close'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteCalendar = function mlDeleteCalendarApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['calendar_id'] == null && params['calendarId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: calendar_id or calendarId')
    return handleError(err, callback)
  }

  var { method, body, calendarId, calendar_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(calendar_id || calendarId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteCalendarEvent = function mlDeleteCalendarEventApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['calendar_id'] == null && params['calendarId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: calendar_id or calendarId')
    return handleError(err, callback)
  }
  if (params['event_id'] == null && params['eventId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: event_id or eventId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['event_id'] != null || params['eventId'] != null) && ((params['calendar_id'] == null && params['calendarId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: calendar_id')
    return handleError(err, callback)
  }

  var { method, body, calendarId, calendar_id, eventId, event_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(calendar_id || calendarId) + '/' + 'events' + '/' + encodeURIComponent(event_id || eventId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteCalendarJob = function mlDeleteCalendarJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['calendar_id'] == null && params['calendarId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: calendar_id or calendarId')
    return handleError(err, callback)
  }
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['job_id'] != null || params['jobId'] != null) && ((params['calendar_id'] == null && params['calendarId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: calendar_id')
    return handleError(err, callback)
  }

  var { method, body, calendarId, calendar_id, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(calendar_id || calendarId) + '/' + 'jobs' + '/' + encodeURIComponent(job_id || jobId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteDataFrameAnalytics = function mlDeleteDataFrameAnalyticsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteDatafeed = function mlDeleteDatafeedApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['datafeed_id'] == null && params['datafeedId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: datafeed_id or datafeedId')
    return handleError(err, callback)
  }

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteExpiredData = function mlDeleteExpiredDataApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((job_id || jobId) != null) {
    if (method == null) method = 'DELETE'
    path = '/' + '_ml' + '/' + '_delete_expired_data' + '/' + encodeURIComponent(job_id || jobId)
  } else {
    if (method == null) method = 'DELETE'
    path = '/' + '_ml' + '/' + '_delete_expired_data'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteFilter = function mlDeleteFilterApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['filter_id'] == null && params['filterId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: filter_id or filterId')
    return handleError(err, callback)
  }

  var { method, body, filterId, filter_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'filters' + '/' + encodeURIComponent(filter_id || filterId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteForecast = function mlDeleteForecastApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['forecast_id'] != null || params['forecastId'] != null) && ((params['job_id'] == null && params['jobId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: job_id')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, forecastId, forecast_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((job_id || jobId) != null && (forecast_id || forecastId) != null) {
    if (method == null) method = 'DELETE'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_forecast' + '/' + encodeURIComponent(forecast_id || forecastId)
  } else {
    if (method == null) method = 'DELETE'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_forecast'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteJob = function mlDeleteJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteModelSnapshot = function mlDeleteModelSnapshotApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }
  if (params['snapshot_id'] == null && params['snapshotId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot_id or snapshotId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['snapshot_id'] != null || params['snapshotId'] != null) && ((params['job_id'] == null && params['jobId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: job_id')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, snapshotId, snapshot_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'model_snapshots' + '/' + encodeURIComponent(snapshot_id || snapshotId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.deleteTrainedModel = function mlDeleteTrainedModelApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['model_id'] == null && params['modelId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: model_id or modelId')
    return handleError(err, callback)
  }

  var { method, body, modelId, model_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_ml' + '/' + 'trained_models' + '/' + encodeURIComponent(model_id || modelId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.estimateModelMemory = function mlEstimateModelMemoryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + '_estimate_model_memory'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.evaluateDataFrame = function mlEvaluateDataFrameApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'data_frame' + '/' + '_evaluate'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.explainDataFrameAnalytics = function mlExplainDataFrameAnalyticsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id) + '/' + '_explain'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + '_explain'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.findFileStructure = function mlFindFileStructureApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'find_file_structure'

  // build request object
  const request = {
    method,
    path,
    bulkBody: body,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.flushJob = function mlFlushJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_flush'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.forecast = function mlForecastApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_forecast'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getBuckets = function mlGetBucketsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  // check required url components
  if (params['timestamp'] != null && ((params['job_id'] == null && params['jobId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: job_id')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, timestamp, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((job_id || jobId) != null && (timestamp) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'results' + '/' + 'buckets' + '/' + encodeURIComponent(timestamp)
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'results' + '/' + 'buckets'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getCalendarEvents = function mlGetCalendarEventsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['calendar_id'] == null && params['calendarId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: calendar_id or calendarId')
    return handleError(err, callback)
  }

  var { method, body, calendarId, calendar_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(calendar_id || calendarId) + '/' + 'events'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getCalendars = function mlGetCalendarsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, calendarId, calendar_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((calendar_id || calendarId) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(calendar_id || calendarId)
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'calendars'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getCategories = function mlGetCategoriesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['category_id'] != null || params['categoryId'] != null) && ((params['job_id'] == null && params['jobId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: job_id')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, categoryId, category_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((job_id || jobId) != null && (category_id || categoryId) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'results' + '/' + 'categories' + '/' + encodeURIComponent(category_id || categoryId)
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'results' + '/' + 'categories'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getDataFrameAnalytics = function mlGetDataFrameAnalyticsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getDataFrameAnalyticsStats = function mlGetDataFrameAnalyticsStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id) + '/' + '_stats'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + '_stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getDatafeedStats = function mlGetDatafeedStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((datafeed_id || datafeedId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId) + '/' + '_stats'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'datafeeds' + '/' + '_stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getDatafeeds = function mlGetDatafeedsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((datafeed_id || datafeedId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'datafeeds'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getFilters = function mlGetFiltersApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, filterId, filter_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((filter_id || filterId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'filters' + '/' + encodeURIComponent(filter_id || filterId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'filters'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getInfluencers = function mlGetInfluencersApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'results' + '/' + 'influencers'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getJobStats = function mlGetJobStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((job_id || jobId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_stats'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + '_stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getJobs = function mlGetJobsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((job_id || jobId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'anomaly_detectors'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getModelSnapshots = function mlGetModelSnapshotsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['snapshot_id'] != null || params['snapshotId'] != null) && ((params['job_id'] == null && params['jobId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: job_id')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, snapshotId, snapshot_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((job_id || jobId) != null && (snapshot_id || snapshotId) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'model_snapshots' + '/' + encodeURIComponent(snapshot_id || snapshotId)
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'model_snapshots'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getOverallBuckets = function mlGetOverallBucketsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'results' + '/' + 'overall_buckets'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getRecords = function mlGetRecordsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'results' + '/' + 'records'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getTrainedModels = function mlGetTrainedModelsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, modelId, model_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((model_id || modelId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'trained_models' + '/' + encodeURIComponent(model_id || modelId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'trained_models'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.getTrainedModelsStats = function mlGetTrainedModelsStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, modelId, model_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((model_id || modelId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'trained_models' + '/' + encodeURIComponent(model_id || modelId) + '/' + '_stats'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_ml' + '/' + 'trained_models' + '/' + '_stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.info = function mlInfoApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_ml' + '/' + 'info'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.openJob = function mlOpenJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_open'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.postCalendarEvents = function mlPostCalendarEventsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['calendar_id'] == null && params['calendarId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: calendar_id or calendarId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, calendarId, calendar_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(calendar_id || calendarId) + '/' + 'events'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.postData = function mlPostDataApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_data'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.previewDatafeed = function mlPreviewDatafeedApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['datafeed_id'] == null && params['datafeedId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: datafeed_id or datafeedId')
    return handleError(err, callback)
  }

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId) + '/' + '_preview'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.putCalendar = function mlPutCalendarApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['calendar_id'] == null && params['calendarId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: calendar_id or calendarId')
    return handleError(err, callback)
  }

  var { method, body, calendarId, calendar_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(calendar_id || calendarId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.putCalendarJob = function mlPutCalendarJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['calendar_id'] == null && params['calendarId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: calendar_id or calendarId')
    return handleError(err, callback)
  }
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['job_id'] != null || params['jobId'] != null) && ((params['calendar_id'] == null && params['calendarId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: calendar_id')
    return handleError(err, callback)
  }

  var { method, body, calendarId, calendar_id, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ml' + '/' + 'calendars' + '/' + encodeURIComponent(calendar_id || calendarId) + '/' + 'jobs' + '/' + encodeURIComponent(job_id || jobId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.putDataFrameAnalytics = function mlPutDataFrameAnalyticsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.putDatafeed = function mlPutDatafeedApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['datafeed_id'] == null && params['datafeedId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: datafeed_id or datafeedId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.putFilter = function mlPutFilterApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['filter_id'] == null && params['filterId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: filter_id or filterId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, filterId, filter_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ml' + '/' + 'filters' + '/' + encodeURIComponent(filter_id || filterId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.putJob = function mlPutJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.putTrainedModel = function mlPutTrainedModelApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['model_id'] == null && params['modelId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: model_id or modelId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, modelId, model_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_ml' + '/' + 'trained_models' + '/' + encodeURIComponent(model_id || modelId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.revertModelSnapshot = function mlRevertModelSnapshotApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }
  if (params['snapshot_id'] == null && params['snapshotId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot_id or snapshotId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['snapshot_id'] != null || params['snapshotId'] != null) && ((params['job_id'] == null && params['jobId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: job_id')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, snapshotId, snapshot_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'model_snapshots' + '/' + encodeURIComponent(snapshot_id || snapshotId) + '/' + '_revert'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.setUpgradeMode = function mlSetUpgradeModeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'set_upgrade_mode'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.startDataFrameAnalytics = function mlStartDataFrameAnalyticsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id) + '/' + '_start'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.startDatafeed = function mlStartDatafeedApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['datafeed_id'] == null && params['datafeedId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: datafeed_id or datafeedId')
    return handleError(err, callback)
  }

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId) + '/' + '_start'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.stopDataFrameAnalytics = function mlStopDataFrameAnalyticsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id) + '/' + '_stop'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.stopDatafeed = function mlStopDatafeedApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['datafeed_id'] == null && params['datafeedId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: datafeed_id or datafeedId')
    return handleError(err, callback)
  }

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId) + '/' + '_stop'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.updateDataFrameAnalytics = function mlUpdateDataFrameAnalyticsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'data_frame' + '/' + 'analytics' + '/' + encodeURIComponent(id) + '/' + '_update'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.updateDatafeed = function mlUpdateDatafeedApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['datafeed_id'] == null && params['datafeedId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: datafeed_id or datafeedId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, datafeedId, datafeed_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'datafeeds' + '/' + encodeURIComponent(datafeed_id || datafeedId) + '/' + '_update'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.updateFilter = function mlUpdateFilterApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['filter_id'] == null && params['filterId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: filter_id or filterId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, filterId, filter_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'filters' + '/' + encodeURIComponent(filter_id || filterId) + '/' + '_update'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.updateJob = function mlUpdateJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + '_update'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.updateModelSnapshot = function mlUpdateModelSnapshotApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }
  if (params['snapshot_id'] == null && params['snapshotId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot_id or snapshotId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['snapshot_id'] != null || params['snapshotId'] != null) && ((params['job_id'] == null && params['jobId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: job_id')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, snapshotId, snapshot_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'model_snapshots' + '/' + encodeURIComponent(snapshot_id || snapshotId) + '/' + '_update'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.upgradeJobSnapshot = function mlUpgradeJobSnapshotApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['job_id'] == null && params['jobId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: job_id or jobId')
    return handleError(err, callback)
  }
  if (params['snapshot_id'] == null && params['snapshotId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot_id or snapshotId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['snapshot_id'] != null || params['snapshotId'] != null) && ((params['job_id'] == null && params['jobId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: job_id')
    return handleError(err, callback)
  }

  var { method, body, jobId, job_id, snapshotId, snapshot_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + encodeURIComponent(job_id || jobId) + '/' + 'model_snapshots' + '/' + encodeURIComponent(snapshot_id || snapshotId) + '/' + '_upgrade'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.validate = function mlValidateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + '_validate'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

MlApi.prototype.validateDetector = function mlValidateDetectorApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_ml' + '/' + 'anomaly_detectors' + '/' + '_validate' + '/' + 'detector'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(MlApi.prototype, {
  close_job: { get () { return this.closeJob } },
  delete_calendar: { get () { return this.deleteCalendar } },
  delete_calendar_event: { get () { return this.deleteCalendarEvent } },
  delete_calendar_job: { get () { return this.deleteCalendarJob } },
  delete_data_frame_analytics: { get () { return this.deleteDataFrameAnalytics } },
  delete_datafeed: { get () { return this.deleteDatafeed } },
  delete_expired_data: { get () { return this.deleteExpiredData } },
  delete_filter: { get () { return this.deleteFilter } },
  delete_forecast: { get () { return this.deleteForecast } },
  delete_job: { get () { return this.deleteJob } },
  delete_model_snapshot: { get () { return this.deleteModelSnapshot } },
  delete_trained_model: { get () { return this.deleteTrainedModel } },
  estimate_model_memory: { get () { return this.estimateModelMemory } },
  evaluate_data_frame: { get () { return this.evaluateDataFrame } },
  explain_data_frame_analytics: { get () { return this.explainDataFrameAnalytics } },
  find_file_structure: { get () { return this.findFileStructure } },
  flush_job: { get () { return this.flushJob } },
  get_buckets: { get () { return this.getBuckets } },
  get_calendar_events: { get () { return this.getCalendarEvents } },
  get_calendars: { get () { return this.getCalendars } },
  get_categories: { get () { return this.getCategories } },
  get_data_frame_analytics: { get () { return this.getDataFrameAnalytics } },
  get_data_frame_analytics_stats: { get () { return this.getDataFrameAnalyticsStats } },
  get_datafeed_stats: { get () { return this.getDatafeedStats } },
  get_datafeeds: { get () { return this.getDatafeeds } },
  get_filters: { get () { return this.getFilters } },
  get_influencers: { get () { return this.getInfluencers } },
  get_job_stats: { get () { return this.getJobStats } },
  get_jobs: { get () { return this.getJobs } },
  get_model_snapshots: { get () { return this.getModelSnapshots } },
  get_overall_buckets: { get () { return this.getOverallBuckets } },
  get_records: { get () { return this.getRecords } },
  get_trained_models: { get () { return this.getTrainedModels } },
  get_trained_models_stats: { get () { return this.getTrainedModelsStats } },
  open_job: { get () { return this.openJob } },
  post_calendar_events: { get () { return this.postCalendarEvents } },
  post_data: { get () { return this.postData } },
  preview_datafeed: { get () { return this.previewDatafeed } },
  put_calendar: { get () { return this.putCalendar } },
  put_calendar_job: { get () { return this.putCalendarJob } },
  put_data_frame_analytics: { get () { return this.putDataFrameAnalytics } },
  put_datafeed: { get () { return this.putDatafeed } },
  put_filter: { get () { return this.putFilter } },
  put_job: { get () { return this.putJob } },
  put_trained_model: { get () { return this.putTrainedModel } },
  revert_model_snapshot: { get () { return this.revertModelSnapshot } },
  set_upgrade_mode: { get () { return this.setUpgradeMode } },
  start_data_frame_analytics: { get () { return this.startDataFrameAnalytics } },
  start_datafeed: { get () { return this.startDatafeed } },
  stop_data_frame_analytics: { get () { return this.stopDataFrameAnalytics } },
  stop_datafeed: { get () { return this.stopDatafeed } },
  update_data_frame_analytics: { get () { return this.updateDataFrameAnalytics } },
  update_datafeed: { get () { return this.updateDatafeed } },
  update_filter: { get () { return this.updateFilter } },
  update_job: { get () { return this.updateJob } },
  update_model_snapshot: { get () { return this.updateModelSnapshot } },
  upgrade_job_snapshot: { get () { return this.upgradeJobSnapshot } },
  validate_detector: { get () { return this.validateDetector } }
})

module.exports = MlApi


/***/ }),

/***/ 297:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['system_id', 'system_api_version', 'interval', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { systemId: 'system_id', systemApiVersion: 'system_api_version', errorTrace: 'error_trace', filterPath: 'filter_path' }

function MonitoringApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

MonitoringApi.prototype.bulk = function monitoringBulkApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((type) != null) {
    if (method == null) method = 'POST'
    path = '/' + '_monitoring' + '/' + encodeURIComponent(type) + '/' + 'bulk'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_monitoring' + '/' + 'bulk'
  }

  // build request object
  const request = {
    method,
    path,
    bulkBody: body,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = MonitoringApi


/***/ }),

/***/ 1744:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['search_type', 'max_concurrent_searches', 'typed_keys', 'pre_filter_shard_size', 'max_concurrent_shard_requests', 'rest_total_hits_as_int', 'ccs_minimize_roundtrips', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { searchType: 'search_type', maxConcurrentSearches: 'max_concurrent_searches', typedKeys: 'typed_keys', preFilterShardSize: 'pre_filter_shard_size', maxConcurrentShardRequests: 'max_concurrent_shard_requests', restTotalHitsAsInt: 'rest_total_hits_as_int', ccsMinimizeRoundtrips: 'ccs_minimize_roundtrips', errorTrace: 'error_trace', filterPath: 'filter_path' }

function msearchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_msearch'
  } else if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_msearch'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_msearch'
  }

  // build request object
  const request = {
    method,
    path,
    bulkBody: body,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = msearchApi


/***/ }),

/***/ 8682:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['search_type', 'typed_keys', 'max_concurrent_searches', 'rest_total_hits_as_int', 'ccs_minimize_roundtrips', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { searchType: 'search_type', typedKeys: 'typed_keys', maxConcurrentSearches: 'max_concurrent_searches', restTotalHitsAsInt: 'rest_total_hits_as_int', ccsMinimizeRoundtrips: 'ccs_minimize_roundtrips', errorTrace: 'error_trace', filterPath: 'filter_path' }

function msearchTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_msearch' + '/' + 'template'
  } else if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_msearch' + '/' + 'template'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_msearch' + '/' + 'template'
  }

  // build request object
  const request = {
    method,
    path,
    bulkBody: body,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = msearchTemplateApi


/***/ }),

/***/ 6263:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['ids', 'term_statistics', 'field_statistics', 'fields', 'offsets', 'positions', 'payloads', 'preference', 'routing', 'realtime', 'version', 'version_type', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { termStatistics: 'term_statistics', fieldStatistics: 'field_statistics', versionType: 'version_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function mtermvectorsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_mtermvectors'
  } else if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_mtermvectors'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_mtermvectors'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = mtermvectorsApi


/***/ }),

/***/ 8733:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['interval', 'snapshots', 'threads', 'ignore_idle_threads', 'type', 'timeout', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'flat_settings', 'completion_fields', 'fielddata_fields', 'fields', 'groups', 'level', 'types', 'include_segment_file_sizes']
const snakeCase = { ignoreIdleThreads: 'ignore_idle_threads', errorTrace: 'error_trace', filterPath: 'filter_path', flatSettings: 'flat_settings', completionFields: 'completion_fields', fielddataFields: 'fielddata_fields', includeSegmentFileSizes: 'include_segment_file_sizes' }

function NodesApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

NodesApi.prototype.hotThreads = function nodesHotThreadsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, nodeId, node_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hot_threads'
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hotthreads'
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hotthreads'
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_cluster' + '/' + 'nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hot_threads'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + 'hot_threads'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

NodesApi.prototype.info = function nodesInfoApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, nodeId, node_id, metric, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((node_id || nodeId) != null && (metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + encodeURIComponent(metric)
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId)
  } else if ((metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(metric)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_nodes'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

NodesApi.prototype.reloadSecureSettings = function nodesReloadSecureSettingsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, nodeId, node_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((node_id || nodeId) != null) {
    if (method == null) method = 'POST'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'reload_secure_settings'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_nodes' + '/' + 'reload_secure_settings'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

NodesApi.prototype.stats = function nodesStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, nodeId, node_id, metric, indexMetric, index_metric, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((node_id || nodeId) != null && (metric) != null && (index_metric || indexMetric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'stats' + '/' + encodeURIComponent(metric) + '/' + encodeURIComponent(index_metric || indexMetric)
  } else if ((node_id || nodeId) != null && (metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'stats' + '/' + encodeURIComponent(metric)
  } else if ((metric) != null && (index_metric || indexMetric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + 'stats' + '/' + encodeURIComponent(metric) + '/' + encodeURIComponent(index_metric || indexMetric)
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'stats'
  } else if ((metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + 'stats' + '/' + encodeURIComponent(metric)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + 'stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

NodesApi.prototype.usage = function nodesUsageApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, nodeId, node_id, metric, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((node_id || nodeId) != null && (metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'usage' + '/' + encodeURIComponent(metric)
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'usage'
  } else if ((metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + 'usage' + '/' + encodeURIComponent(metric)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_nodes' + '/' + 'usage'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(NodesApi.prototype, {
  hot_threads: { get () { return this.hotThreads } },
  reload_secure_settings: { get () { return this.reloadSecureSettings } }
})

module.exports = NodesApi


/***/ }),

/***/ 9819:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['preference', 'routing', 'ignore_unavailable', 'expand_wildcards', 'keep_alive', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { ignoreUnavailable: 'ignore_unavailable', expandWildcards: 'expand_wildcards', keepAlive: 'keep_alive', errorTrace: 'error_trace', filterPath: 'filter_path' }

function openPointInTimeApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_pit'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_pit'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = openPointInTimeApi


/***/ }),

/***/ 844:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function pingApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'HEAD'
  path = '/'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = pingApi


/***/ }),

/***/ 9534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['timeout', 'master_timeout', 'context', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { masterTimeout: 'master_timeout', errorTrace: 'error_trace', filterPath: 'filter_path' }

function putScriptApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['context'] != null && (params['id'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: id')
    return handleError(err, callback)
  }

  var { method, body, id, context, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null && (context) != null) {
    if (method == null) method = 'PUT'
    path = '/' + '_scripts' + '/' + encodeURIComponent(id) + '/' + encodeURIComponent(context)
  } else {
    if (method == null) method = 'PUT'
    path = '/' + '_scripts' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = putScriptApi


/***/ }),

/***/ 3718:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['ignore_unavailable', 'allow_no_indices', 'expand_wildcards', 'search_type', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', searchType: 'search_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function rankEvalApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_rank_eval'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_rank_eval'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = rankEvalApi


/***/ }),

/***/ 7895:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['refresh', 'timeout', 'wait_for_active_shards', 'wait_for_completion', 'requests_per_second', 'scroll', 'slices', 'max_docs', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { waitForActiveShards: 'wait_for_active_shards', waitForCompletion: 'wait_for_completion', requestsPerSecond: 'requests_per_second', maxDocs: 'max_docs', errorTrace: 'error_trace', filterPath: 'filter_path' }

function reindexApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_reindex'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = reindexApi


/***/ }),

/***/ 454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['requests_per_second', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { requestsPerSecond: 'requests_per_second', errorTrace: 'error_trace', filterPath: 'filter_path' }

function reindexRethrottleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['task_id'] == null && params['taskId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: task_id or taskId')
    return handleError(err, callback)
  }
  if (params['requests_per_second'] == null && params['requestsPerSecond'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: requests_per_second or requestsPerSecond')
    return handleError(err, callback)
  }

  var { method, body, taskId, task_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_reindex' + '/' + encodeURIComponent(task_id || taskId) + '/' + '_rethrottle'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = reindexRethrottleApi


/***/ }),

/***/ 7505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function renderSearchTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_render' + '/' + 'template' + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_render' + '/' + 'template'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = renderSearchTemplateApi


/***/ }),

/***/ 9890:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'typed_keys', 'rest_total_hits_as_int', 'wait_for_completion', 'timeout']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', typedKeys: 'typed_keys', restTotalHitsAsInt: 'rest_total_hits_as_int', waitForCompletion: 'wait_for_completion' }

function RollupApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

RollupApi.prototype.deleteJob = function rollupDeleteJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_rollup' + '/' + 'job' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

RollupApi.prototype.getJobs = function rollupGetJobsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_rollup' + '/' + 'job' + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_rollup' + '/' + 'job'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

RollupApi.prototype.getRollupCaps = function rollupGetRollupCapsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_rollup' + '/' + 'data' + '/' + encodeURIComponent(id)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_rollup' + '/' + 'data'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

RollupApi.prototype.getRollupIndexCaps = function rollupGetRollupIndexCapsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + encodeURIComponent(index) + '/' + '_rollup' + '/' + 'data'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

RollupApi.prototype.putJob = function rollupPutJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_rollup' + '/' + 'job' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

RollupApi.prototype.rollup = function rollupRollupApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['rollup_index'] == null && params['rollupIndex'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: rollup_index or rollupIndex')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['rollup_index'] != null || params['rollupIndex'] != null) && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, rollupIndex, rollup_index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + encodeURIComponent(index) + '/' + '_rollup' + '/' + encodeURIComponent(rollup_index || rollupIndex)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

RollupApi.prototype.rollupSearch = function rollupRollupSearchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_rollup_search'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_rollup_search'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

RollupApi.prototype.startJob = function rollupStartJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_rollup' + '/' + 'job' + '/' + encodeURIComponent(id) + '/' + '_start'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

RollupApi.prototype.stopJob = function rollupStopJobApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_rollup' + '/' + 'job' + '/' + encodeURIComponent(id) + '/' + '_stop'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(RollupApi.prototype, {
  delete_job: { get () { return this.deleteJob } },
  get_jobs: { get () { return this.getJobs } },
  get_rollup_caps: { get () { return this.getRollupCaps } },
  get_rollup_index_caps: { get () { return this.getRollupIndexCaps } },
  put_job: { get () { return this.putJob } },
  rollup_search: { get () { return this.rollupSearch } },
  start_job: { get () { return this.startJob } },
  stop_job: { get () { return this.stopJob } }
})

module.exports = RollupApi


/***/ }),

/***/ 6868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function scriptsPainlessExecuteApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + '_scripts' + '/' + 'painless' + '/' + '_execute'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = scriptsPainlessExecuteApi


/***/ }),

/***/ 7279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['scroll', 'scroll_id', 'rest_total_hits_as_int', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { scrollId: 'scroll_id', restTotalHitsAsInt: 'rest_total_hits_as_int', errorTrace: 'error_trace', filterPath: 'filter_path' }

function scrollApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, scrollId, scroll_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((scroll_id || scrollId) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_search' + '/' + 'scroll' + '/' + encodeURIComponent(scroll_id || scrollId)
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_search' + '/' + 'scroll'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = scrollApi


/***/ }),

/***/ 3906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['analyzer', 'analyze_wildcard', 'ccs_minimize_roundtrips', 'default_operator', 'df', 'explain', 'stored_fields', 'docvalue_fields', 'from', 'ignore_unavailable', 'ignore_throttled', 'allow_no_indices', 'expand_wildcards', 'lenient', 'preference', 'q', 'routing', 'scroll', 'search_type', 'size', 'sort', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'terminate_after', 'stats', 'suggest_field', 'suggest_mode', 'suggest_size', 'suggest_text', 'timeout', 'track_scores', 'track_total_hits', 'allow_partial_search_results', 'typed_keys', 'version', 'seq_no_primary_term', 'request_cache', 'batched_reduce_size', 'max_concurrent_shard_requests', 'pre_filter_shard_size', 'rest_total_hits_as_int', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { analyzeWildcard: 'analyze_wildcard', ccsMinimizeRoundtrips: 'ccs_minimize_roundtrips', defaultOperator: 'default_operator', storedFields: 'stored_fields', docvalueFields: 'docvalue_fields', ignoreUnavailable: 'ignore_unavailable', ignoreThrottled: 'ignore_throttled', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', searchType: 'search_type', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', terminateAfter: 'terminate_after', suggestField: 'suggest_field', suggestMode: 'suggest_mode', suggestSize: 'suggest_size', suggestText: 'suggest_text', trackScores: 'track_scores', trackTotalHits: 'track_total_hits', allowPartialSearchResults: 'allow_partial_search_results', typedKeys: 'typed_keys', seqNoPrimaryTerm: 'seq_no_primary_term', requestCache: 'request_cache', batchedReduceSize: 'batched_reduce_size', maxConcurrentShardRequests: 'max_concurrent_shard_requests', preFilterShardSize: 'pre_filter_shard_size', restTotalHitsAsInt: 'rest_total_hits_as_int', errorTrace: 'error_trace', filterPath: 'filter_path' }

function searchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_search'
  } else if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_search'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_search'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = searchApi


/***/ }),

/***/ 7363:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['preference', 'routing', 'local', 'ignore_unavailable', 'allow_no_indices', 'expand_wildcards', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', errorTrace: 'error_trace', filterPath: 'filter_path' }

function searchShardsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_search_shards'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_search_shards'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = searchShardsApi


/***/ }),

/***/ 7397:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['ignore_unavailable', 'ignore_throttled', 'allow_no_indices', 'expand_wildcards', 'preference', 'routing', 'scroll', 'search_type', 'explain', 'profile', 'typed_keys', 'rest_total_hits_as_int', 'ccs_minimize_roundtrips', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { ignoreUnavailable: 'ignore_unavailable', ignoreThrottled: 'ignore_throttled', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', searchType: 'search_type', typedKeys: 'typed_keys', restTotalHitsAsInt: 'rest_total_hits_as_int', ccsMinimizeRoundtrips: 'ccs_minimize_roundtrips', errorTrace: 'error_trace', filterPath: 'filter_path' }

function searchTemplateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_search' + '/' + 'template'
  } else if ((index) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_search' + '/' + 'template'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_search' + '/' + 'template'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = searchTemplateApi


/***/ }),

/***/ 1143:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['ignore_unavailable', 'allow_no_indices', 'expand_wildcards', 'index', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'master_timeout', 'wait_for_completion']
const snakeCase = { ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', errorTrace: 'error_trace', filterPath: 'filter_path', masterTimeout: 'master_timeout', waitForCompletion: 'wait_for_completion' }

function SearchableSnapshotsApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

SearchableSnapshotsApi.prototype.clearCache = function searchableSnapshotsClearCacheApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_searchable_snapshots' + '/' + 'cache' + '/' + 'clear'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_searchable_snapshots' + '/' + 'cache' + '/' + 'clear'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SearchableSnapshotsApi.prototype.mount = function searchableSnapshotsMountApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }
  if (params['snapshot'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if (params['snapshot'] != null && (params['repository'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, snapshot, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot) + '/' + '_mount'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SearchableSnapshotsApi.prototype.repositoryStats = function searchableSnapshotsRepositoryStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + '_stats'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SearchableSnapshotsApi.prototype.stats = function searchableSnapshotsStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, index, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null) {
    if (method == null) method = 'GET'
    path = '/' + encodeURIComponent(index) + '/' + '_searchable_snapshots' + '/' + 'stats'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_searchable_snapshots' + '/' + 'stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(SearchableSnapshotsApi.prototype, {
  clear_cache: { get () { return this.clearCache } },
  repository_stats: { get () { return this.repositoryStats } }
})

module.exports = SearchableSnapshotsApi


/***/ }),

/***/ 7561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'refresh', 'usernames', 'id', 'name', 'username', 'realm_name', 'owner']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', realmName: 'realm_name' }

function SecurityApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

SecurityApi.prototype.authenticate = function securityAuthenticateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_security' + '/' + '_authenticate'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.changePassword = function securityChangePasswordApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, username, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((username) != null) {
    if (method == null) method = 'PUT'
    path = '/' + '_security' + '/' + 'user' + '/' + encodeURIComponent(username) + '/' + '_password'
  } else {
    if (method == null) method = 'PUT'
    path = '/' + '_security' + '/' + 'user' + '/' + '_password'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.clearApiKeyCache = function securityClearApiKeyCacheApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['ids'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: ids')
    return handleError(err, callback)
  }

  var { method, body, ids, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_security' + '/' + 'api_key' + '/' + encodeURIComponent(ids) + '/' + '_clear_cache'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.clearCachedPrivileges = function securityClearCachedPrivilegesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['application'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: application')
    return handleError(err, callback)
  }

  var { method, body, application, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_security' + '/' + 'privilege' + '/' + encodeURIComponent(application) + '/' + '_clear_cache'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.clearCachedRealms = function securityClearCachedRealmsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['realms'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: realms')
    return handleError(err, callback)
  }

  var { method, body, realms, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_security' + '/' + 'realm' + '/' + encodeURIComponent(realms) + '/' + '_clear_cache'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.clearCachedRoles = function securityClearCachedRolesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_security' + '/' + 'role' + '/' + encodeURIComponent(name) + '/' + '_clear_cache'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.createApiKey = function securityCreateApiKeyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_security' + '/' + 'api_key'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.deletePrivileges = function securityDeletePrivilegesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['application'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: application')
    return handleError(err, callback)
  }
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  // check required url components
  if (params['name'] != null && (params['application'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: application')
    return handleError(err, callback)
  }

  var { method, body, application, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_security' + '/' + 'privilege' + '/' + encodeURIComponent(application) + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.deleteRole = function securityDeleteRoleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_security' + '/' + 'role' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.deleteRoleMapping = function securityDeleteRoleMappingApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_security' + '/' + 'role_mapping' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.deleteUser = function securityDeleteUserApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['username'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: username')
    return handleError(err, callback)
  }

  var { method, body, username, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_security' + '/' + 'user' + '/' + encodeURIComponent(username)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.disableUser = function securityDisableUserApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['username'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: username')
    return handleError(err, callback)
  }

  var { method, body, username, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_security' + '/' + 'user' + '/' + encodeURIComponent(username) + '/' + '_disable'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.enableUser = function securityEnableUserApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['username'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: username')
    return handleError(err, callback)
  }

  var { method, body, username, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_security' + '/' + 'user' + '/' + encodeURIComponent(username) + '/' + '_enable'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.getApiKey = function securityGetApiKeyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_security' + '/' + 'api_key'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.getBuiltinPrivileges = function securityGetBuiltinPrivilegesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_security' + '/' + 'privilege' + '/' + '_builtin'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.getPrivileges = function securityGetPrivilegesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required url components
  if (params['name'] != null && (params['application'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: application')
    return handleError(err, callback)
  }

  var { method, body, application, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((application) != null && (name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'privilege' + '/' + encodeURIComponent(application) + '/' + encodeURIComponent(name)
  } else if ((application) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'privilege' + '/' + encodeURIComponent(application)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'privilege'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.getRole = function securityGetRoleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'role' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'role'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.getRoleMapping = function securityGetRoleMappingApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((name) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'role_mapping' + '/' + encodeURIComponent(name)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'role_mapping'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.getToken = function securityGetTokenApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_security' + '/' + 'oauth2' + '/' + 'token'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.getUser = function securityGetUserApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, username, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((username) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'user' + '/' + encodeURIComponent(username)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_security' + '/' + 'user'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.getUserPrivileges = function securityGetUserPrivilegesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_security' + '/' + 'user' + '/' + '_privileges'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.grantApiKey = function securityGrantApiKeyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_security' + '/' + 'api_key' + '/' + 'grant'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.hasPrivileges = function securityHasPrivilegesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, user, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((user) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_security' + '/' + 'user' + '/' + encodeURIComponent(user) + '/' + '_has_privileges'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + '_security' + '/' + 'user' + '/' + '_has_privileges'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.invalidateApiKey = function securityInvalidateApiKeyApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_security' + '/' + 'api_key'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.invalidateToken = function securityInvalidateTokenApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_security' + '/' + 'oauth2' + '/' + 'token'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.putPrivileges = function securityPutPrivilegesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_security' + '/' + 'privilege'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.putRole = function securityPutRoleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_security' + '/' + 'role' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.putRoleMapping = function securityPutRoleMappingApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['name'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, name, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_security' + '/' + 'role_mapping' + '/' + encodeURIComponent(name)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SecurityApi.prototype.putUser = function securityPutUserApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['username'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: username')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, username, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_security' + '/' + 'user' + '/' + encodeURIComponent(username)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(SecurityApi.prototype, {
  change_password: { get () { return this.changePassword } },
  clear_api_key_cache: { get () { return this.clearApiKeyCache } },
  clear_cached_privileges: { get () { return this.clearCachedPrivileges } },
  clear_cached_realms: { get () { return this.clearCachedRealms } },
  clear_cached_roles: { get () { return this.clearCachedRoles } },
  create_api_key: { get () { return this.createApiKey } },
  delete_privileges: { get () { return this.deletePrivileges } },
  delete_role: { get () { return this.deleteRole } },
  delete_role_mapping: { get () { return this.deleteRoleMapping } },
  delete_user: { get () { return this.deleteUser } },
  disable_user: { get () { return this.disableUser } },
  enable_user: { get () { return this.enableUser } },
  get_api_key: { get () { return this.getApiKey } },
  get_builtin_privileges: { get () { return this.getBuiltinPrivileges } },
  get_privileges: { get () { return this.getPrivileges } },
  get_role: { get () { return this.getRole } },
  get_role_mapping: { get () { return this.getRoleMapping } },
  get_token: { get () { return this.getToken } },
  get_user: { get () { return this.getUser } },
  get_user_privileges: { get () { return this.getUserPrivileges } },
  grant_api_key: { get () { return this.grantApiKey } },
  has_privileges: { get () { return this.hasPrivileges } },
  invalidate_api_key: { get () { return this.invalidateApiKey } },
  invalidate_token: { get () { return this.invalidateToken } },
  put_privileges: { get () { return this.putPrivileges } },
  put_role: { get () { return this.putRole } },
  put_role_mapping: { get () { return this.putRoleMapping } },
  put_user: { get () { return this.putUser } }
})

module.exports = SecurityApi


/***/ }),

/***/ 3950:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function SlmApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

SlmApi.prototype.deleteLifecycle = function slmDeleteLifecycleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['policy_id'] == null && params['policyId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: policy_id or policyId')
    return handleError(err, callback)
  }

  var { method, body, policyId, policy_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_slm' + '/' + 'policy' + '/' + encodeURIComponent(policy_id || policyId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SlmApi.prototype.executeLifecycle = function slmExecuteLifecycleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['policy_id'] == null && params['policyId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: policy_id or policyId')
    return handleError(err, callback)
  }

  var { method, body, policyId, policy_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_slm' + '/' + 'policy' + '/' + encodeURIComponent(policy_id || policyId) + '/' + '_execute'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SlmApi.prototype.executeRetention = function slmExecuteRetentionApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_slm' + '/' + '_execute_retention'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SlmApi.prototype.getLifecycle = function slmGetLifecycleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, policyId, policy_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((policy_id || policyId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_slm' + '/' + 'policy' + '/' + encodeURIComponent(policy_id || policyId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_slm' + '/' + 'policy'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SlmApi.prototype.getStats = function slmGetStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_slm' + '/' + 'stats'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SlmApi.prototype.getStatus = function slmGetStatusApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_slm' + '/' + 'status'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SlmApi.prototype.putLifecycle = function slmPutLifecycleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['policy_id'] == null && params['policyId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: policy_id or policyId')
    return handleError(err, callback)
  }

  var { method, body, policyId, policy_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_slm' + '/' + 'policy' + '/' + encodeURIComponent(policy_id || policyId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SlmApi.prototype.start = function slmStartApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_slm' + '/' + 'start'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SlmApi.prototype.stop = function slmStopApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_slm' + '/' + 'stop'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(SlmApi.prototype, {
  delete_lifecycle: { get () { return this.deleteLifecycle } },
  execute_lifecycle: { get () { return this.executeLifecycle } },
  execute_retention: { get () { return this.executeRetention } },
  get_lifecycle: { get () { return this.getLifecycle } },
  get_stats: { get () { return this.getStats } },
  get_status: { get () { return this.getStatus } },
  put_lifecycle: { get () { return this.putLifecycle } }
})

module.exports = SlmApi


/***/ }),

/***/ 624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['master_timeout', 'timeout', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'wait_for_completion', 'verify', 'ignore_unavailable', 'verbose', 'local']
const snakeCase = { masterTimeout: 'master_timeout', errorTrace: 'error_trace', filterPath: 'filter_path', waitForCompletion: 'wait_for_completion', ignoreUnavailable: 'ignore_unavailable' }

function SnapshotApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

SnapshotApi.prototype.cleanupRepository = function snapshotCleanupRepositoryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + '_cleanup'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.clone = function snapshotCloneApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }
  if (params['snapshot'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot')
    return handleError(err, callback)
  }
  if (params['target_snapshot'] == null && params['targetSnapshot'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: target_snapshot or targetSnapshot')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['target_snapshot'] != null || params['targetSnapshot'] != null) && (params['snapshot'] == null || params['repository'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: snapshot, repository')
    return handleError(err, callback)
  } else if (params['snapshot'] != null && (params['repository'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, snapshot, targetSnapshot, target_snapshot, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot) + '/' + '_clone' + '/' + encodeURIComponent(target_snapshot || targetSnapshot)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.create = function snapshotCreateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }
  if (params['snapshot'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot')
    return handleError(err, callback)
  }

  // check required url components
  if (params['snapshot'] != null && (params['repository'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, snapshot, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.createRepository = function snapshotCreateRepositoryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, repository, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.delete = function snapshotDeleteApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }
  if (params['snapshot'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot')
    return handleError(err, callback)
  }

  // check required url components
  if (params['snapshot'] != null && (params['repository'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, snapshot, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.deleteRepository = function snapshotDeleteRepositoryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.get = function snapshotGetApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }
  if (params['snapshot'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot')
    return handleError(err, callback)
  }

  // check required url components
  if (params['snapshot'] != null && (params['repository'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, snapshot, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.getRepository = function snapshotGetRepositoryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, repository, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((repository) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_snapshot' + '/' + encodeURIComponent(repository)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_snapshot'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.restore = function snapshotRestoreApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }
  if (params['snapshot'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: snapshot')
    return handleError(err, callback)
  }

  // check required url components
  if (params['snapshot'] != null && (params['repository'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, snapshot, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot) + '/' + '_restore'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.status = function snapshotStatusApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required url components
  if (params['snapshot'] != null && (params['repository'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, snapshot, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((repository) != null && (snapshot) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + encodeURIComponent(snapshot) + '/' + '_status'
  } else if ((repository) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + '_status'
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_snapshot' + '/' + '_status'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

SnapshotApi.prototype.verifyRepository = function snapshotVerifyRepositoryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['repository'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: repository')
    return handleError(err, callback)
  }

  var { method, body, repository, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_snapshot' + '/' + encodeURIComponent(repository) + '/' + '_verify'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(SnapshotApi.prototype, {
  cleanup_repository: { get () { return this.cleanupRepository } },
  create_repository: { get () { return this.createRepository } },
  delete_repository: { get () { return this.deleteRepository } },
  get_repository: { get () { return this.getRepository } },
  verify_repository: { get () { return this.verifyRepository } }
})

module.exports = SnapshotApi


/***/ }),

/***/ 4292:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'format']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function SqlApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

SqlApi.prototype.clearCursor = function sqlClearCursorApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_sql' + '/' + 'close'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SqlApi.prototype.query = function sqlQueryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + '_sql'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

SqlApi.prototype.translate = function sqlTranslateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + '_sql' + '/' + 'translate'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(SqlApi.prototype, {
  clear_cursor: { get () { return this.clearCursor } }
})

module.exports = SqlApi


/***/ }),

/***/ 1088:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' }

function SslApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

SslApi.prototype.certificates = function sslCertificatesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_ssl' + '/' + 'certificates'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = SslApi


/***/ }),

/***/ 3740:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['nodes', 'actions', 'parent_task_id', 'wait_for_completion', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'timeout', 'detailed', 'group_by']
const snakeCase = { parentTaskId: 'parent_task_id', waitForCompletion: 'wait_for_completion', errorTrace: 'error_trace', filterPath: 'filter_path', groupBy: 'group_by' }

function TasksApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

TasksApi.prototype.cancel = function tasksCancelApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, taskId, task_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((task_id || taskId) != null) {
    if (method == null) method = 'POST'
    path = '/' + '_tasks' + '/' + encodeURIComponent(task_id || taskId) + '/' + '_cancel'
  } else {
    if (method == null) method = 'POST'
    path = '/' + '_tasks' + '/' + '_cancel'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

TasksApi.prototype.get = function tasksGetApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['task_id'] == null && params['taskId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: task_id or taskId')
    return handleError(err, callback)
  }

  var { method, body, taskId, task_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_tasks' + '/' + encodeURIComponent(task_id || taskId)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

TasksApi.prototype.list = function tasksListApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_tasks'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = TasksApi


/***/ }),

/***/ 2298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['term_statistics', 'field_statistics', 'fields', 'offsets', 'positions', 'payloads', 'preference', 'routing', 'realtime', 'version', 'version_type', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { termStatistics: 'term_statistics', fieldStatistics: 'field_statistics', versionType: 'version_type', errorTrace: 'error_trace', filterPath: 'filter_path' }

function termvectorsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  var { method, body, index, id, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id) + '/' + '_termvectors'
  } else if ((index) != null && (id) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_termvectors' + '/' + encodeURIComponent(id)
  } else if ((index) != null && (type) != null) {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_termvectors'
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_termvectors'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = termvectorsApi


/***/ }),

/***/ 2546:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['force', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'from', 'size', 'allow_no_match', 'exclude_generated', 'defer_validation', 'timeout', 'wait_for_completion', 'wait_for_checkpoint']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', allowNoMatch: 'allow_no_match', excludeGenerated: 'exclude_generated', deferValidation: 'defer_validation', waitForCompletion: 'wait_for_completion', waitForCheckpoint: 'wait_for_checkpoint' }

function TransformApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

TransformApi.prototype.deleteTransform = function transformDeleteTransformApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['transform_id'] == null && params['transformId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: transform_id or transformId')
    return handleError(err, callback)
  }

  var { method, body, transformId, transform_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_transform' + '/' + encodeURIComponent(transform_id || transformId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

TransformApi.prototype.getTransform = function transformGetTransformApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, transformId, transform_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((transform_id || transformId) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_transform' + '/' + encodeURIComponent(transform_id || transformId)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_transform'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

TransformApi.prototype.getTransformStats = function transformGetTransformStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['transform_id'] == null && params['transformId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: transform_id or transformId')
    return handleError(err, callback)
  }

  var { method, body, transformId, transform_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_transform' + '/' + encodeURIComponent(transform_id || transformId) + '/' + '_stats'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

TransformApi.prototype.previewTransform = function transformPreviewTransformApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_transform' + '/' + '_preview'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

TransformApi.prototype.putTransform = function transformPutTransformApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['transform_id'] == null && params['transformId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: transform_id or transformId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, transformId, transform_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_transform' + '/' + encodeURIComponent(transform_id || transformId)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

TransformApi.prototype.startTransform = function transformStartTransformApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['transform_id'] == null && params['transformId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: transform_id or transformId')
    return handleError(err, callback)
  }

  var { method, body, transformId, transform_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_transform' + '/' + encodeURIComponent(transform_id || transformId) + '/' + '_start'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

TransformApi.prototype.stopTransform = function transformStopTransformApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['transform_id'] == null && params['transformId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: transform_id or transformId')
    return handleError(err, callback)
  }

  var { method, body, transformId, transform_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_transform' + '/' + encodeURIComponent(transform_id || transformId) + '/' + '_stop'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

TransformApi.prototype.updateTransform = function transformUpdateTransformApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['transform_id'] == null && params['transformId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: transform_id or transformId')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, transformId, transform_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_transform' + '/' + encodeURIComponent(transform_id || transformId) + '/' + '_update'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(TransformApi.prototype, {
  delete_transform: { get () { return this.deleteTransform } },
  get_transform: { get () { return this.getTransform } },
  get_transform_stats: { get () { return this.getTransformStats } },
  preview_transform: { get () { return this.previewTransform } },
  put_transform: { get () { return this.putTransform } },
  start_transform: { get () { return this.startTransform } },
  stop_transform: { get () { return this.stopTransform } },
  update_transform: { get () { return this.updateTransform } }
})

module.exports = TransformApi


/***/ }),

/***/ 2727:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['wait_for_active_shards', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'lang', 'refresh', 'retry_on_conflict', 'routing', 'timeout', 'if_seq_no', 'if_primary_term', 'require_alias', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { waitForActiveShards: 'wait_for_active_shards', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', retryOnConflict: 'retry_on_conflict', ifSeqNo: 'if_seq_no', ifPrimaryTerm: 'if_primary_term', requireAlias: 'require_alias', errorTrace: 'error_trace', filterPath: 'filter_path' }

function updateApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body')
    return handleError(err, callback)
  }

  var { method, body, id, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null && (id) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + encodeURIComponent(id) + '/' + '_update'
  } else {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_update' + '/' + encodeURIComponent(id)
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = updateApi


/***/ }),

/***/ 7971:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['analyzer', 'analyze_wildcard', 'default_operator', 'df', 'from', 'ignore_unavailable', 'allow_no_indices', 'conflicts', 'expand_wildcards', 'lenient', 'pipeline', 'preference', 'q', 'routing', 'scroll', 'search_type', 'search_timeout', 'size', 'max_docs', 'sort', '_source', '_source_excludes', '_source_exclude', '_source_includes', '_source_include', 'terminate_after', 'stats', 'version', 'version_type', 'request_cache', 'refresh', 'timeout', 'wait_for_active_shards', 'scroll_size', 'wait_for_completion', 'requests_per_second', 'slices', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { analyzeWildcard: 'analyze_wildcard', defaultOperator: 'default_operator', ignoreUnavailable: 'ignore_unavailable', allowNoIndices: 'allow_no_indices', expandWildcards: 'expand_wildcards', searchType: 'search_type', searchTimeout: 'search_timeout', maxDocs: 'max_docs', _sourceExcludes: '_source_excludes', _sourceExclude: '_source_exclude', _sourceIncludes: '_source_includes', _sourceInclude: '_source_include', terminateAfter: 'terminate_after', versionType: 'version_type', requestCache: 'request_cache', waitForActiveShards: 'wait_for_active_shards', scrollSize: 'scroll_size', waitForCompletion: 'wait_for_completion', requestsPerSecond: 'requests_per_second', errorTrace: 'error_trace', filterPath: 'filter_path' }

function updateByQueryApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index')
    return handleError(err, callback)
  }

  // check required url components
  if (params['type'] != null && (params['index'] == null)) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index')
    return handleError(err, callback)
  }

  var { method, body, index, type, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((index) != null && (type) != null) {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_update_by_query'
  } else {
    if (method == null) method = 'POST'
    path = '/' + encodeURIComponent(index) + '/' + '_update_by_query'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = updateByQueryApi


/***/ }),

/***/ 6911:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['requests_per_second', 'pretty', 'human', 'error_trace', 'source', 'filter_path']
const snakeCase = { requestsPerSecond: 'requests_per_second', errorTrace: 'error_trace', filterPath: 'filter_path' }

function updateByQueryRethrottleApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['task_id'] == null && params['taskId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: task_id or taskId')
    return handleError(err, callback)
  }
  if (params['requests_per_second'] == null && params['requestsPerSecond'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: requests_per_second or requestsPerSecond')
    return handleError(err, callback)
  }

  var { method, body, taskId, task_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_update_by_query' + '/' + encodeURIComponent(task_id || taskId) + '/' + '_rethrottle'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = updateByQueryRethrottleApi


/***/ }),

/***/ 3524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path', 'debug', 'active', 'version', 'if_seq_no', 'if_primary_term', 'metric', 'emit_stacktraces']
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path', ifSeqNo: 'if_seq_no', ifPrimaryTerm: 'if_primary_term', emitStacktraces: 'emit_stacktraces' }

function WatcherApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

WatcherApi.prototype.ackWatch = function watcherAckWatchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['watch_id'] == null && params['watchId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: watch_id or watchId')
    return handleError(err, callback)
  }

  // check required url components
  if ((params['action_id'] != null || params['actionId'] != null) && ((params['watch_id'] == null && params['watchId'] == null))) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: watch_id')
    return handleError(err, callback)
  }

  var { method, body, watchId, watch_id, actionId, action_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((watch_id || watchId) != null && (action_id || actionId) != null) {
    if (method == null) method = 'PUT'
    path = '/' + '_watcher' + '/' + 'watch' + '/' + encodeURIComponent(watch_id || watchId) + '/' + '_ack' + '/' + encodeURIComponent(action_id || actionId)
  } else {
    if (method == null) method = 'PUT'
    path = '/' + '_watcher' + '/' + 'watch' + '/' + encodeURIComponent(watch_id || watchId) + '/' + '_ack'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.activateWatch = function watcherActivateWatchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['watch_id'] == null && params['watchId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: watch_id or watchId')
    return handleError(err, callback)
  }

  var { method, body, watchId, watch_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_watcher' + '/' + 'watch' + '/' + encodeURIComponent(watch_id || watchId) + '/' + '_activate'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.deactivateWatch = function watcherDeactivateWatchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['watch_id'] == null && params['watchId'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: watch_id or watchId')
    return handleError(err, callback)
  }

  var { method, body, watchId, watch_id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_watcher' + '/' + 'watch' + '/' + encodeURIComponent(watch_id || watchId) + '/' + '_deactivate'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.deleteWatch = function watcherDeleteWatchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'DELETE'
  path = '/' + '_watcher' + '/' + 'watch' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.executeWatch = function watcherExecuteWatchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((id) != null) {
    if (method == null) method = 'PUT'
    path = '/' + '_watcher' + '/' + 'watch' + '/' + encodeURIComponent(id) + '/' + '_execute'
  } else {
    if (method == null) method = 'PUT'
    path = '/' + '_watcher' + '/' + 'watch' + '/' + '_execute'
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.getWatch = function watcherGetWatchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_watcher' + '/' + 'watch' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.putWatch = function watcherPutWatchApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  // check required parameters
  if (params['id'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id')
    return handleError(err, callback)
  }

  var { method, body, id, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'PUT'
  path = '/' + '_watcher' + '/' + 'watch' + '/' + encodeURIComponent(id)

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.queryWatches = function watcherQueryWatchesApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = body == null ? 'GET' : 'POST'
  path = '/' + '_watcher' + '/' + '_query' + '/' + 'watches'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.start = function watcherStartApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_watcher' + '/' + '_start'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.stats = function watcherStatsApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, metric, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if ((metric) != null) {
    if (method == null) method = 'GET'
    path = '/' + '_watcher' + '/' + 'stats' + '/' + encodeURIComponent(metric)
  } else {
    if (method == null) method = 'GET'
    path = '/' + '_watcher' + '/' + 'stats'
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

WatcherApi.prototype.stop = function watcherStopApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'POST'
  path = '/' + '_watcher' + '/' + '_stop'

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring
  }

  return this.transport.request(request, options, callback)
}

Object.defineProperties(WatcherApi.prototype, {
  ack_watch: { get () { return this.ackWatch } },
  activate_watch: { get () { return this.activateWatch } },
  deactivate_watch: { get () { return this.deactivateWatch } },
  delete_watch: { get () { return this.deleteWatch } },
  execute_watch: { get () { return this.executeWatch } },
  get_watch: { get () { return this.getWatch } },
  put_watch: { get () { return this.putWatch } },
  query_watches: { get () { return this.queryWatches } }
})

module.exports = WatcherApi


/***/ }),

/***/ 1126:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = __webpack_require__(7402)
const acceptedQuerystring = ['categories', 'accept_enterprise', 'pretty', 'human', 'error_trace', 'source', 'filter_path', 'master_timeout']
const snakeCase = { acceptEnterprise: 'accept_enterprise', errorTrace: 'error_trace', filterPath: 'filter_path', masterTimeout: 'master_timeout' }

function XpackApi (transport, ConfigurationError) {
  this.transport = transport
  this[kConfigurationError] = ConfigurationError
}

XpackApi.prototype.info = function xpackInfoApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_xpack'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

XpackApi.prototype.usage = function xpackUsageApi (params, options, callback) {
  ;[params, options, callback] = normalizeArguments(params, options, callback)

  var { method, body, ...querystring } = params
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring)

  var path = ''
  if (method == null) method = 'GET'
  path = '/' + '_xpack' + '/' + 'usage'

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring
  }

  return this.transport.request(request, options, callback)
}

module.exports = XpackApi


/***/ }),

/***/ 4704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const bulkApi = __webpack_require__(7106)
const CatApi = __webpack_require__(203)
const clearScrollApi = __webpack_require__(8704)
const ClusterApi = __webpack_require__(145)
const countApi = __webpack_require__(8655)
const createApi = __webpack_require__(4352)
const DanglingIndicesApi = __webpack_require__(2645)
const deleteApi = __webpack_require__(2870)
const deleteByQueryApi = __webpack_require__(2489)
const deleteByQueryRethrottleApi = __webpack_require__(2729)
const deleteScriptApi = __webpack_require__(4390)
const existsApi = __webpack_require__(7343)
const existsSourceApi = __webpack_require__(7645)
const explainApi = __webpack_require__(8847)
const fieldCapsApi = __webpack_require__(2683)
const getApi = __webpack_require__(8034)
const getScriptApi = __webpack_require__(1483)
const getScriptContextApi = __webpack_require__(3727)
const getScriptLanguagesApi = __webpack_require__(8740)
const getSourceApi = __webpack_require__(1338)
const indexApi = __webpack_require__(549)
const IndicesApi = __webpack_require__(3835)
const infoApi = __webpack_require__(7927)
const IngestApi = __webpack_require__(521)
const mgetApi = __webpack_require__(4774)
const msearchApi = __webpack_require__(1744)
const msearchTemplateApi = __webpack_require__(8682)
const mtermvectorsApi = __webpack_require__(6263)
const NodesApi = __webpack_require__(8733)
const pingApi = __webpack_require__(844)
const putScriptApi = __webpack_require__(9534)
const rankEvalApi = __webpack_require__(3718)
const reindexApi = __webpack_require__(7895)
const reindexRethrottleApi = __webpack_require__(454)
const renderSearchTemplateApi = __webpack_require__(7505)
const scriptsPainlessExecuteApi = __webpack_require__(6868)
const scrollApi = __webpack_require__(7279)
const searchApi = __webpack_require__(3906)
const searchShardsApi = __webpack_require__(7363)
const searchTemplateApi = __webpack_require__(7397)
const SnapshotApi = __webpack_require__(624)
const TasksApi = __webpack_require__(3740)
const termvectorsApi = __webpack_require__(2298)
const updateApi = __webpack_require__(2727)
const updateByQueryApi = __webpack_require__(7971)
const updateByQueryRethrottleApi = __webpack_require__(6911)
const AsyncSearchApi = __webpack_require__(4591)
const AutoscalingApi = __webpack_require__(6734)
const CcrApi = __webpack_require__(1989)
const closePointInTimeApi = __webpack_require__(2025)
const EnrichApi = __webpack_require__(2126)
const EqlApi = __webpack_require__(8662)
const GraphApi = __webpack_require__(3238)
const IlmApi = __webpack_require__(7293)
const LicenseApi = __webpack_require__(4766)
const MigrationApi = __webpack_require__(6960)
const MlApi = __webpack_require__(4520)
const MonitoringApi = __webpack_require__(297)
const openPointInTimeApi = __webpack_require__(9819)
const RollupApi = __webpack_require__(9890)
const SearchableSnapshotsApi = __webpack_require__(1143)
const SecurityApi = __webpack_require__(7561)
const SlmApi = __webpack_require__(3950)
const SqlApi = __webpack_require__(4292)
const SslApi = __webpack_require__(1088)
const TransformApi = __webpack_require__(2546)
const WatcherApi = __webpack_require__(3524)
const XpackApi = __webpack_require__(1126)

const { kConfigurationError } = __webpack_require__(7402)
const kCat = Symbol('Cat')
const kCluster = Symbol('Cluster')
const kDanglingIndices = Symbol('DanglingIndices')
const kIndices = Symbol('Indices')
const kIngest = Symbol('Ingest')
const kNodes = Symbol('Nodes')
const kSnapshot = Symbol('Snapshot')
const kTasks = Symbol('Tasks')
const kAsyncSearch = Symbol('AsyncSearch')
const kAutoscaling = Symbol('Autoscaling')
const kCcr = Symbol('Ccr')
const kEnrich = Symbol('Enrich')
const kEql = Symbol('Eql')
const kGraph = Symbol('Graph')
const kIlm = Symbol('Ilm')
const kLicense = Symbol('License')
const kMigration = Symbol('Migration')
const kMl = Symbol('Ml')
const kMonitoring = Symbol('Monitoring')
const kRollup = Symbol('Rollup')
const kSearchableSnapshots = Symbol('SearchableSnapshots')
const kSecurity = Symbol('Security')
const kSlm = Symbol('Slm')
const kSql = Symbol('Sql')
const kSsl = Symbol('Ssl')
const kTransform = Symbol('Transform')
const kWatcher = Symbol('Watcher')
const kXpack = Symbol('Xpack')

function ESAPI (opts) {
  this[kConfigurationError] = opts.ConfigurationError
  this[kCat] = null
  this[kCluster] = null
  this[kDanglingIndices] = null
  this[kIndices] = null
  this[kIngest] = null
  this[kNodes] = null
  this[kSnapshot] = null
  this[kTasks] = null
  this[kAsyncSearch] = null
  this[kAutoscaling] = null
  this[kCcr] = null
  this[kEnrich] = null
  this[kEql] = null
  this[kGraph] = null
  this[kIlm] = null
  this[kLicense] = null
  this[kMigration] = null
  this[kMl] = null
  this[kMonitoring] = null
  this[kRollup] = null
  this[kSearchableSnapshots] = null
  this[kSecurity] = null
  this[kSlm] = null
  this[kSql] = null
  this[kSsl] = null
  this[kTransform] = null
  this[kWatcher] = null
  this[kXpack] = null
}

ESAPI.prototype.bulk = bulkApi
ESAPI.prototype.clearScroll = clearScrollApi
ESAPI.prototype.count = countApi
ESAPI.prototype.create = createApi
ESAPI.prototype.delete = deleteApi
ESAPI.prototype.deleteByQuery = deleteByQueryApi
ESAPI.prototype.deleteByQueryRethrottle = deleteByQueryRethrottleApi
ESAPI.prototype.deleteScript = deleteScriptApi
ESAPI.prototype.exists = existsApi
ESAPI.prototype.existsSource = existsSourceApi
ESAPI.prototype.explain = explainApi
ESAPI.prototype.fieldCaps = fieldCapsApi
ESAPI.prototype.get = getApi
ESAPI.prototype.getScript = getScriptApi
ESAPI.prototype.getScriptContext = getScriptContextApi
ESAPI.prototype.getScriptLanguages = getScriptLanguagesApi
ESAPI.prototype.getSource = getSourceApi
ESAPI.prototype.index = indexApi
ESAPI.prototype.info = infoApi
ESAPI.prototype.mget = mgetApi
ESAPI.prototype.msearch = msearchApi
ESAPI.prototype.msearchTemplate = msearchTemplateApi
ESAPI.prototype.mtermvectors = mtermvectorsApi
ESAPI.prototype.ping = pingApi
ESAPI.prototype.putScript = putScriptApi
ESAPI.prototype.rankEval = rankEvalApi
ESAPI.prototype.reindex = reindexApi
ESAPI.prototype.reindexRethrottle = reindexRethrottleApi
ESAPI.prototype.renderSearchTemplate = renderSearchTemplateApi
ESAPI.prototype.scriptsPainlessExecute = scriptsPainlessExecuteApi
ESAPI.prototype.scroll = scrollApi
ESAPI.prototype.search = searchApi
ESAPI.prototype.searchShards = searchShardsApi
ESAPI.prototype.searchTemplate = searchTemplateApi
ESAPI.prototype.termvectors = termvectorsApi
ESAPI.prototype.update = updateApi
ESAPI.prototype.updateByQuery = updateByQueryApi
ESAPI.prototype.updateByQueryRethrottle = updateByQueryRethrottleApi
ESAPI.prototype.closePointInTime = closePointInTimeApi
ESAPI.prototype.openPointInTime = openPointInTimeApi

Object.defineProperties(ESAPI.prototype, {
  cat: {
    get () {
      if (this[kCat] === null) {
        this[kCat] = new CatApi(this.transport, this[kConfigurationError])
      }
      return this[kCat]
    }
  },
  clear_scroll: { get () { return this.clearScroll } },
  cluster: {
    get () {
      if (this[kCluster] === null) {
        this[kCluster] = new ClusterApi(this.transport, this[kConfigurationError])
      }
      return this[kCluster]
    }
  },
  danglingIndices: {
    get () {
      if (this[kDanglingIndices] === null) {
        this[kDanglingIndices] = new DanglingIndicesApi(this.transport, this[kConfigurationError])
      }
      return this[kDanglingIndices]
    }
  },
  dangling_indices: { get () { return this.danglingIndices } },
  delete_by_query: { get () { return this.deleteByQuery } },
  delete_by_query_rethrottle: { get () { return this.deleteByQueryRethrottle } },
  delete_script: { get () { return this.deleteScript } },
  exists_source: { get () { return this.existsSource } },
  field_caps: { get () { return this.fieldCaps } },
  get_script: { get () { return this.getScript } },
  get_script_context: { get () { return this.getScriptContext } },
  get_script_languages: { get () { return this.getScriptLanguages } },
  get_source: { get () { return this.getSource } },
  indices: {
    get () {
      if (this[kIndices] === null) {
        this[kIndices] = new IndicesApi(this.transport, this[kConfigurationError])
      }
      return this[kIndices]
    }
  },
  ingest: {
    get () {
      if (this[kIngest] === null) {
        this[kIngest] = new IngestApi(this.transport, this[kConfigurationError])
      }
      return this[kIngest]
    }
  },
  msearch_template: { get () { return this.msearchTemplate } },
  nodes: {
    get () {
      if (this[kNodes] === null) {
        this[kNodes] = new NodesApi(this.transport, this[kConfigurationError])
      }
      return this[kNodes]
    }
  },
  put_script: { get () { return this.putScript } },
  rank_eval: { get () { return this.rankEval } },
  reindex_rethrottle: { get () { return this.reindexRethrottle } },
  render_search_template: { get () { return this.renderSearchTemplate } },
  scripts_painless_execute: { get () { return this.scriptsPainlessExecute } },
  search_shards: { get () { return this.searchShards } },
  search_template: { get () { return this.searchTemplate } },
  snapshot: {
    get () {
      if (this[kSnapshot] === null) {
        this[kSnapshot] = new SnapshotApi(this.transport, this[kConfigurationError])
      }
      return this[kSnapshot]
    }
  },
  tasks: {
    get () {
      if (this[kTasks] === null) {
        this[kTasks] = new TasksApi(this.transport, this[kConfigurationError])
      }
      return this[kTasks]
    }
  },
  update_by_query: { get () { return this.updateByQuery } },
  update_by_query_rethrottle: { get () { return this.updateByQueryRethrottle } },
  asyncSearch: {
    get () {
      if (this[kAsyncSearch] === null) {
        this[kAsyncSearch] = new AsyncSearchApi(this.transport, this[kConfigurationError])
      }
      return this[kAsyncSearch]
    }
  },
  async_search: { get () { return this.asyncSearch } },
  autoscaling: {
    get () {
      if (this[kAutoscaling] === null) {
        this[kAutoscaling] = new AutoscalingApi(this.transport, this[kConfigurationError])
      }
      return this[kAutoscaling]
    }
  },
  ccr: {
    get () {
      if (this[kCcr] === null) {
        this[kCcr] = new CcrApi(this.transport, this[kConfigurationError])
      }
      return this[kCcr]
    }
  },
  close_point_in_time: { get () { return this.closePointInTime } },
  enrich: {
    get () {
      if (this[kEnrich] === null) {
        this[kEnrich] = new EnrichApi(this.transport, this[kConfigurationError])
      }
      return this[kEnrich]
    }
  },
  eql: {
    get () {
      if (this[kEql] === null) {
        this[kEql] = new EqlApi(this.transport, this[kConfigurationError])
      }
      return this[kEql]
    }
  },
  graph: {
    get () {
      if (this[kGraph] === null) {
        this[kGraph] = new GraphApi(this.transport, this[kConfigurationError])
      }
      return this[kGraph]
    }
  },
  ilm: {
    get () {
      if (this[kIlm] === null) {
        this[kIlm] = new IlmApi(this.transport, this[kConfigurationError])
      }
      return this[kIlm]
    }
  },
  license: {
    get () {
      if (this[kLicense] === null) {
        this[kLicense] = new LicenseApi(this.transport, this[kConfigurationError])
      }
      return this[kLicense]
    }
  },
  migration: {
    get () {
      if (this[kMigration] === null) {
        this[kMigration] = new MigrationApi(this.transport, this[kConfigurationError])
      }
      return this[kMigration]
    }
  },
  ml: {
    get () {
      if (this[kMl] === null) {
        this[kMl] = new MlApi(this.transport, this[kConfigurationError])
      }
      return this[kMl]
    }
  },
  monitoring: {
    get () {
      if (this[kMonitoring] === null) {
        this[kMonitoring] = new MonitoringApi(this.transport, this[kConfigurationError])
      }
      return this[kMonitoring]
    }
  },
  open_point_in_time: { get () { return this.openPointInTime } },
  rollup: {
    get () {
      if (this[kRollup] === null) {
        this[kRollup] = new RollupApi(this.transport, this[kConfigurationError])
      }
      return this[kRollup]
    }
  },
  searchableSnapshots: {
    get () {
      if (this[kSearchableSnapshots] === null) {
        this[kSearchableSnapshots] = new SearchableSnapshotsApi(this.transport, this[kConfigurationError])
      }
      return this[kSearchableSnapshots]
    }
  },
  searchable_snapshots: { get () { return this.searchableSnapshots } },
  security: {
    get () {
      if (this[kSecurity] === null) {
        this[kSecurity] = new SecurityApi(this.transport, this[kConfigurationError])
      }
      return this[kSecurity]
    }
  },
  slm: {
    get () {
      if (this[kSlm] === null) {
        this[kSlm] = new SlmApi(this.transport, this[kConfigurationError])
      }
      return this[kSlm]
    }
  },
  sql: {
    get () {
      if (this[kSql] === null) {
        this[kSql] = new SqlApi(this.transport, this[kConfigurationError])
      }
      return this[kSql]
    }
  },
  ssl: {
    get () {
      if (this[kSsl] === null) {
        this[kSsl] = new SslApi(this.transport, this[kConfigurationError])
      }
      return this[kSsl]
    }
  },
  transform: {
    get () {
      if (this[kTransform] === null) {
        this[kTransform] = new TransformApi(this.transport, this[kConfigurationError])
      }
      return this[kTransform]
    }
  },
  watcher: {
    get () {
      if (this[kWatcher] === null) {
        this[kWatcher] = new WatcherApi(this.transport, this[kConfigurationError])
      }
      return this[kWatcher]
    }
  },
  xpack: {
    get () {
      if (this[kXpack] === null) {
        this[kXpack] = new XpackApi(this.transport, this[kConfigurationError])
      }
      return this[kXpack]
    }
  }
})

module.exports = ESAPI


/***/ }),

/***/ 7402:
/***/ ((module) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const result = { body: null, statusCode: null, headers: null, warnings: null }
const kConfigurationError = Symbol('configuration error')

function handleError (err, callback) {
  if (callback) {
    process.nextTick(callback, err, result)
    return { then: noop, catch: noop, abort: noop }
  }
  return Promise.reject(err)
}

function snakeCaseKeys (acceptedQuerystring, snakeCase, querystring) {
  var target = {}
  var keys = Object.keys(querystring)
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i]
    target[snakeCase[key] || key] = querystring[key]
  }
  return target
}

function normalizeArguments (params, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }
  if (typeof params === 'function' || params == null) {
    callback = params
    params = {}
    options = {}
  }
  return [params, options, callback]
}

function noop () {}

module.exports = { handleError, snakeCaseKeys, normalizeArguments, noop, kConfigurationError }


/***/ }),

/***/ 8221:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const nodeMajor = Number(process.versions.node.split('.')[0])

const { EventEmitter } = __webpack_require__(8614)
const { URL } = __webpack_require__(8835)
const debug = __webpack_require__(9558)('elasticsearch')
const Transport = __webpack_require__(5532)
const Connection = __webpack_require__(6508)
const { ConnectionPool, CloudConnectionPool } = __webpack_require__(8167)
// Helpers works only in Node.js >= 10
const Helpers = nodeMajor < 10 ? /* istanbul ignore next */ null : __webpack_require__(2432)
const Serializer = __webpack_require__(5239)
const errors = __webpack_require__(7095)
const { ConfigurationError } = errors
const { prepareHeaders } = Connection.internals
const clientVersion = __webpack_require__(7529)/* .version */ .i8
const nodeVersion = process.versions.node

const kInitialOptions = Symbol('elasticsearchjs-initial-options')
const kChild = Symbol('elasticsearchjs-child')
const kExtensions = Symbol('elasticsearchjs-extensions')
const kEventEmitter = Symbol('elasticsearchjs-event-emitter')

const ESAPI = __webpack_require__(4704)

/* istanbul ignore next */
if (nodeMajor < 10) {
  process.emitWarning('You are using a version of Node.js that is currently in EOL. ' +
                      'The support for this version will be dropped in 7.12. ' +
                      'Please refer to https://ela.st/nodejs-support for additional information.',
  'DeprecationWarning'
  )
}

/* istanbul ignore next */
if (nodeMajor >= 10 && nodeMajor < 12) {
  process.emitWarning('You are using a version of Node.js that will reach EOL in April 2021. ' +
                      'The support for this version will be dropped in 7.13. ' +
                      'Please refer to https://ela.st/nodejs-support for additional information.',
  'DeprecationWarning'
  )
}

class Client extends ESAPI {
  constructor (opts = {}) {
    super({ ConfigurationError })
    if (opts.cloud && opts[kChild] === undefined) {
      const { id, username, password } = opts.cloud
      // the cloud id is `cluster-name:base64encodedurl`
      // the url is a string divided by two '$', the first is the cloud url
      // the second the elasticsearch instance, the third the kibana instance
      const cloudUrls = Buffer.from(id.split(':')[1], 'base64').toString().split('$')

      // TODO: remove username and password here in 8
      if (username && password) {
        opts.auth = Object.assign({}, opts.auth, { username, password })
      }
      opts.node = `https://${cloudUrls[1]}.${cloudUrls[0]}`

      // Cloud has better performances with compression enabled
      // see https://github.com/elastic/elasticsearch-py/pull/704.
      // So unless the user specifies otherwise, we enable compression.
      if (opts.compression == null) opts.compression = 'gzip'
      if (opts.suggestCompression == null) opts.suggestCompression = true
      if (opts.ssl == null ||
         (opts.ssl && opts.ssl.secureProtocol == null)) {
        opts.ssl = opts.ssl || {}
        opts.ssl.secureProtocol = 'TLSv1_2_method'
      }
    }

    if (!opts.node && !opts.nodes) {
      throw new ConfigurationError('Missing node(s) option')
    }

    if (opts[kChild] === undefined) {
      const checkAuth = getAuth(opts.node || opts.nodes)
      if (checkAuth && checkAuth.username && checkAuth.password) {
        opts.auth = Object.assign({}, opts.auth, { username: checkAuth.username, password: checkAuth.password })
      }
    }

    const options = opts[kChild] !== undefined
      ? opts[kChild].initialOptions
      : Object.assign({}, {
        Connection,
        Transport,
        Serializer,
        ConnectionPool: opts.cloud ? CloudConnectionPool : ConnectionPool,
        maxRetries: 3,
        requestTimeout: 30000,
        pingTimeout: 3000,
        sniffInterval: false,
        sniffOnStart: false,
        sniffEndpoint: '_nodes/_all/http',
        sniffOnConnectionFault: false,
        resurrectStrategy: 'ping',
        suggestCompression: false,
        compression: false,
        ssl: null,
        agent: null,
        headers: {},
        nodeFilter: null,
        nodeSelector: 'round-robin',
        generateRequestId: null,
        name: 'elasticsearch-js',
        auth: null,
        opaqueIdPrefix: null,
        context: null,
        proxy: null,
        enableMetaHeader: true
      }, opts)

    this[kInitialOptions] = options
    this[kExtensions] = []
    this.name = options.name

    if (options.enableMetaHeader) {
      options.headers['x-elastic-client-meta'] = `es=${clientVersion},js=${nodeVersion},t=${clientVersion},hc=${nodeVersion}`
    }

    if (opts[kChild] !== undefined) {
      this.serializer = options[kChild].serializer
      this.connectionPool = options[kChild].connectionPool
      this[kEventEmitter] = options[kChild].eventEmitter
    } else {
      this[kEventEmitter] = new EventEmitter()
      this.serializer = new options.Serializer()
      this.connectionPool = new options.ConnectionPool({
        pingTimeout: options.pingTimeout,
        resurrectStrategy: options.resurrectStrategy,
        ssl: options.ssl,
        agent: options.agent,
        proxy: options.proxy,
        Connection: options.Connection,
        auth: options.auth,
        emit: this[kEventEmitter].emit.bind(this[kEventEmitter]),
        sniffEnabled: options.sniffInterval !== false ||
                      options.sniffOnStart !== false ||
                      options.sniffOnConnectionFault !== false
      })
      // Add the connections before initialize the Transport
      this.connectionPool.addConnection(options.node || options.nodes)
    }

    this.transport = new options.Transport({
      emit: this[kEventEmitter].emit.bind(this[kEventEmitter]),
      connectionPool: this.connectionPool,
      serializer: this.serializer,
      maxRetries: options.maxRetries,
      requestTimeout: options.requestTimeout,
      sniffInterval: options.sniffInterval,
      sniffOnStart: options.sniffOnStart,
      sniffOnConnectionFault: options.sniffOnConnectionFault,
      sniffEndpoint: options.sniffEndpoint,
      suggestCompression: options.suggestCompression,
      compression: options.compression,
      headers: options.headers,
      nodeFilter: options.nodeFilter,
      nodeSelector: options.nodeSelector,
      generateRequestId: options.generateRequestId,
      name: options.name,
      opaqueIdPrefix: options.opaqueIdPrefix,
      context: options.context
    })

    /* istanbul ignore else */
    if (Helpers !== null) {
      this.helpers = new Helpers({
        client: this,
        maxRetries: options.maxRetries,
        metaHeader: options.enableMetaHeader
          ? `es=${clientVersion},js=${nodeVersion},t=${clientVersion},hc=${nodeVersion}`
          : null
      })
    }
  }

  get emit () {
    return this[kEventEmitter].emit.bind(this[kEventEmitter])
  }

  get on () {
    return this[kEventEmitter].on.bind(this[kEventEmitter])
  }

  get once () {
    return this[kEventEmitter].once.bind(this[kEventEmitter])
  }

  get off () {
    return this[kEventEmitter].off.bind(this[kEventEmitter])
  }

  extend (name, opts, fn) {
    if (typeof opts === 'function') {
      fn = opts
      opts = {}
    }

    var [namespace, method] = name.split('.')
    if (method == null) {
      method = namespace
      namespace = null
    }

    if (namespace != null) {
      if (this[namespace] != null && this[namespace][method] != null && opts.force !== true) {
        throw new Error(`The method "${method}" already exists on namespace "${namespace}"`)
      }

      if (this[namespace] == null) this[namespace] = {}
      this[namespace][method] = fn({
        makeRequest: this.transport.request.bind(this.transport),
        result: { body: null, statusCode: null, headers: null, warnings: null },
        ConfigurationError
      })
    } else {
      if (this[method] != null && opts.force !== true) {
        throw new Error(`The method "${method}" already exists`)
      }

      this[method] = fn({
        makeRequest: this.transport.request.bind(this.transport),
        result: { body: null, statusCode: null, headers: null, warnings: null },
        ConfigurationError
      })
    }

    this[kExtensions].push({ name, opts, fn })
  }

  child (opts) {
    // Merge the new options with the initial ones
    const options = Object.assign({}, this[kInitialOptions], opts)
    // Pass to the child client the parent instances that cannot be overriden
    options[kChild] = {
      connectionPool: this.connectionPool,
      serializer: this.serializer,
      eventEmitter: this[kEventEmitter],
      initialOptions: options
    }

    /* istanbul ignore else */
    if (options.auth !== undefined) {
      options.headers = prepareHeaders(options.headers, options.auth)
    }

    const client = new Client(options)
    // Add parent extensions
    if (this[kExtensions].length > 0) {
      this[kExtensions].forEach(({ name, opts, fn }) => {
        client.extend(name, opts, fn)
      })
    }
    return client
  }

  close (callback) {
    if (callback == null) {
      return new Promise((resolve, reject) => {
        this.close(resolve)
      })
    }
    debug('Closing the client')
    this.connectionPool.empty(callback)
  }
}

function getAuth (node) {
  if (Array.isArray(node)) {
    for (const url of node) {
      const auth = getUsernameAndPassword(url)
      if (auth.username !== '' && auth.password !== '') {
        return auth
      }
    }

    return null
  }

  const auth = getUsernameAndPassword(node)
  if (auth.username !== '' && auth.password !== '') {
    return auth
  }

  return null

  function getUsernameAndPassword (node) {
    /* istanbul ignore else */
    if (typeof node === 'string') {
      const { username, password } = new URL(node)
      return {
        username: decodeURIComponent(username),
        password: decodeURIComponent(password)
      }
    } else if (node.url instanceof URL) {
      return {
        username: decodeURIComponent(node.url.username),
        password: decodeURIComponent(node.url.password)
      }
    }
  }
}

const events = {
  RESPONSE: 'response',
  REQUEST: 'request',
  SNIFF: 'sniff',
  RESURRECT: 'resurrect',
  SERIALIZATION: 'serialization',
  DESERIALIZATION: 'deserialization'
}

module.exports = {
  Client,
  Transport,
  ConnectionPool,
  Connection,
  Serializer,
  events,
  errors
}


/***/ }),

/***/ 6508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const assert = __webpack_require__(2357)
const { inspect } = __webpack_require__(1669)
const hpagent = __webpack_require__(770)
const http = __webpack_require__(8605)
const https = __webpack_require__(7211)
const debug = __webpack_require__(9558)('elasticsearch')
const pump = __webpack_require__(736)
const INVALID_PATH_REGEX = /[^\u0021-\u00ff]/
const {
  ConnectionError,
  RequestAbortedError,
  TimeoutError,
  ConfigurationError
} = __webpack_require__(7095)

class Connection {
  constructor (opts) {
    this.url = opts.url
    this.ssl = opts.ssl || null
    this.id = opts.id || stripAuth(opts.url.href)
    this.headers = prepareHeaders(opts.headers, opts.auth)
    this.deadCount = 0
    this.resurrectTimeout = 0

    this._openRequests = 0
    this._status = opts.status || Connection.statuses.ALIVE
    this.roles = Object.assign({}, defaultRoles, opts.roles)

    if (!['http:', 'https:'].includes(this.url.protocol)) {
      throw new ConfigurationError(`Invalid protocol: '${this.url.protocol}'`)
    }

    if (typeof opts.agent === 'function') {
      this.agent = opts.agent(opts)
    } else if (opts.agent === false) {
      this.agent = undefined
    } else {
      const agentOptions = Object.assign({}, {
        keepAlive: true,
        keepAliveMsecs: 1000,
        maxSockets: 256,
        maxFreeSockets: 256,
        scheduling: 'lifo'
      }, opts.agent)
      if (opts.proxy) {
        agentOptions.proxy = opts.proxy
        this.agent = this.url.protocol === 'http:'
          ? new hpagent.HttpProxyAgent(agentOptions)
          : new hpagent.HttpsProxyAgent(Object.assign({}, agentOptions, this.ssl))
      } else {
        this.agent = this.url.protocol === 'http:'
          ? new http.Agent(agentOptions)
          : new https.Agent(Object.assign({}, agentOptions, this.ssl))
      }
    }

    this.makeRequest = this.url.protocol === 'http:'
      ? http.request
      : https.request
  }

  request (params, callback) {
    this._openRequests++
    let cleanedListeners = false

    const requestParams = this.buildRequestObject(params)
    // https://github.com/nodejs/node/commit/b961d9fd83
    if (INVALID_PATH_REGEX.test(requestParams.path) === true) {
      callback(new TypeError(`ERR_UNESCAPED_CHARACTERS: ${requestParams.path}`), null)
      /* istanbul ignore next */
      return { abort: () => {} }
    }

    debug('Starting a new request', params)
    const request = this.makeRequest(requestParams)

    const onResponse = response => {
      cleanListeners()
      this._openRequests--
      callback(null, response)
    }

    const onTimeout = () => {
      cleanListeners()
      this._openRequests--
      request.once('error', () => {}) // we need to catch the request aborted error
      request.abort()
      callback(new TimeoutError('Request timed out', params), null)
    }

    const onError = err => {
      cleanListeners()
      this._openRequests--
      callback(new ConnectionError(err.message), null)
    }

    const onAbort = () => {
      cleanListeners()
      request.once('error', () => {}) // we need to catch the request aborted error
      debug('Request aborted', params)
      this._openRequests--
      callback(new RequestAbortedError(), null)
    }

    request.on('response', onResponse)
    request.on('timeout', onTimeout)
    request.on('error', onError)
    request.on('abort', onAbort)

    // Disables the Nagle algorithm
    request.setNoDelay(true)

    // starts the request
    if (isStream(params.body) === true) {
      pump(params.body, request, err => {
        /* istanbul ignore if  */
        if (err != null && cleanedListeners === false) {
          cleanListeners()
          this._openRequests--
          callback(err, null)
        }
      })
    } else {
      request.end(params.body)
    }

    return request

    function cleanListeners () {
      request.removeListener('response', onResponse)
      request.removeListener('timeout', onTimeout)
      request.removeListener('error', onError)
      request.removeListener('abort', onAbort)
      cleanedListeners = true
    }
  }

  // TODO: write a better closing logic
  close (callback = () => {}) {
    debug('Closing connection', this.id)
    if (this._openRequests > 0) {
      setTimeout(() => this.close(callback), 1000)
    } else {
      if (this.agent !== undefined) {
        this.agent.destroy()
      }
      callback()
    }
  }

  setRole (role, enabled) {
    if (validRoles.indexOf(role) === -1) {
      throw new ConfigurationError(`Unsupported role: '${role}'`)
    }
    if (typeof enabled !== 'boolean') {
      throw new ConfigurationError('enabled should be a boolean')
    }

    this.roles[role] = enabled
    return this
  }

  get status () {
    return this._status
  }

  set status (status) {
    assert(
      ~validStatuses.indexOf(status),
      `Unsupported status: '${status}'`
    )
    this._status = status
  }

  buildRequestObject (params) {
    const url = this.url
    const request = {
      protocol: url.protocol,
      hostname: url.hostname[0] === '['
        ? url.hostname.slice(1, -1)
        : url.hostname,
      hash: url.hash,
      search: url.search,
      pathname: url.pathname,
      path: '',
      href: url.href,
      origin: url.origin,
      // https://github.com/elastic/elasticsearch-js/issues/843
      port: url.port !== '' ? url.port : undefined,
      headers: this.headers,
      agent: this.agent
    }

    const paramsKeys = Object.keys(params)
    for (var i = 0, len = paramsKeys.length; i < len; i++) {
      var key = paramsKeys[i]
      if (key === 'path') {
        request.pathname = resolve(request.pathname, params[key])
      } else if (key === 'querystring' && !!params[key] === true) {
        if (request.search === '') {
          request.search = '?' + params[key]
        } else {
          request.search += '&' + params[key]
        }
      } else if (key === 'headers') {
        request.headers = Object.assign({}, request.headers, params.headers)
      } else {
        request[key] = params[key]
      }
    }

    request.path = request.pathname + request.search

    return request
  }

  // Handles console.log and utils.inspect invocations.
  // We want to hide `auth`, `agent` and `ssl` since they made
  // the logs very hard to read. The user can still
  // access them with `instance.agent` and `instance.ssl`.
  [inspect.custom] (depth, options) {
    const {
      authorization,
      ...headers
    } = this.headers

    return {
      url: stripAuth(this.url.toString()),
      id: this.id,
      headers,
      deadCount: this.deadCount,
      resurrectTimeout: this.resurrectTimeout,
      _openRequests: this._openRequests,
      status: this.status,
      roles: this.roles
    }
  }

  toJSON () {
    const {
      authorization,
      ...headers
    } = this.headers

    return {
      url: stripAuth(this.url.toString()),
      id: this.id,
      headers,
      deadCount: this.deadCount,
      resurrectTimeout: this.resurrectTimeout,
      _openRequests: this._openRequests,
      status: this.status,
      roles: this.roles
    }
  }
}

Connection.statuses = {
  ALIVE: 'alive',
  DEAD: 'dead'
}

Connection.roles = {
  MASTER: 'master',
  DATA: 'data',
  INGEST: 'ingest',
  ML: 'ml'
}

const defaultRoles = {
  [Connection.roles.MASTER]: true,
  [Connection.roles.DATA]: true,
  [Connection.roles.INGEST]: true,
  [Connection.roles.ML]: false
}

const validStatuses = Object.keys(Connection.statuses)
  .map(k => Connection.statuses[k])
const validRoles = Object.keys(Connection.roles)
  .map(k => Connection.roles[k])

function stripAuth (url) {
  if (url.indexOf('@') === -1) return url
  return url.slice(0, url.indexOf('//') + 2) + url.slice(url.indexOf('@') + 1)
}

function isStream (obj) {
  return obj != null && typeof obj.pipe === 'function'
}

function resolve (host, path) {
  const hostEndWithSlash = host[host.length - 1] === '/'
  const pathStartsWithSlash = path[0] === '/'

  if (hostEndWithSlash === true && pathStartsWithSlash === true) {
    return host + path.slice(1)
  } else if (hostEndWithSlash !== pathStartsWithSlash) {
    return host + path
  } else {
    return host + '/' + path
  }
}

function prepareHeaders (headers = {}, auth) {
  if (auth != null && headers.authorization == null) {
    /* istanbul ignore else */
    if (auth.apiKey) {
      if (typeof auth.apiKey === 'object') {
        headers.authorization = 'ApiKey ' + Buffer.from(`${auth.apiKey.id}:${auth.apiKey.api_key}`).toString('base64')
      } else {
        headers.authorization = `ApiKey ${auth.apiKey}`
      }
    } else if (auth.username && auth.password) {
      headers.authorization = 'Basic ' + Buffer.from(`${auth.username}:${auth.password}`).toString('base64')
    }
  }
  return headers
}

module.exports = Connection
module.exports.internals = { prepareHeaders }


/***/ }),

/***/ 2432:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/* eslint camelcase: 0 */

const { Readable } = __webpack_require__(2413)
const { promisify } = __webpack_require__(1669)
const { ResponseError, ConfigurationError } = __webpack_require__(7095)

const pImmediate = promisify(setImmediate)
const sleep = promisify(setTimeout)
const kClient = Symbol('elasticsearch-client')
const kMetaHeader = Symbol('meta header')
/* istanbul ignore next */
const noop = () => {}

class Helpers {
  constructor (opts) {
    this[kClient] = opts.client
    this[kMetaHeader] = opts.metaHeader
    this.maxRetries = opts.maxRetries
  }

  /**
   * Runs a search operation. The only difference between client.search and this utility,
   * is that we are only returning the hits to the user and not the full ES response.
   * This helper automatically adds `filter_path=hits.hits._source` to the querystring,
   * as it will only need the documents source.
   * @param {object} params - The Elasticsearch's search parameters.
   * @param {object} options - The client optional configuration for this request.
   * @return {array} The documents that matched the request.
   */
  async search (params, options) {
    appendFilterPath('hits.hits._source', params, true)
    const { body } = await this[kClient].search(params, options)
    if (body.hits && body.hits.hits) {
      return body.hits.hits.map(d => d._source)
    }
    return []
  }

  /**
   * Runs a scroll search operation. This function returns an async iterator, allowing
   * the user to use a for await loop to get all the results of a given search.
   * ```js
   * for await (const result of client.helpers.scrollSearch({ params })) {
   *   console.log(result)
   * }
   * ```
   * Each result represents the entire body of a single scroll search request,
   * if you just need to scroll the results, use scrollDocuments.
   * This function handles automatically retries on 429 status code.
   * @param {object} params - The Elasticsearch's search parameters.
   * @param {object} options - The client optional configuration for this request.
   * @return {iterator} the async iterator
   */
  async * scrollSearch (params, options = {}) {
    if (this[kMetaHeader] !== null) {
      options.headers = options.headers || {}
      options.headers['x-elastic-client-meta'] = this[kMetaHeader] + ',h=s'
    }
    // TODO: study scroll search slices
    const wait = options.wait || 5000
    const maxRetries = options.maxRetries || this.maxRetries
    if (Array.isArray(options.ignore)) {
      options.ignore.push(429)
    } else {
      options.ignore = [429]
    }
    params.scroll = params.scroll || '1m'
    appendFilterPath('_scroll_id', params, false)
    const { method, body, index, ...querystring } = params

    let response = null
    for (let i = 0; i <= maxRetries; i++) {
      response = await this[kClient].search(params, options)
      if (response.statusCode !== 429) break
      await sleep(wait)
    }
    if (response.statusCode === 429) {
      throw new ResponseError(response)
    }

    let scroll_id = response.body._scroll_id
    let stop = false
    const clear = async () => {
      stop = true
      await this[kClient].clearScroll(
        { body: { scroll_id } },
        { ignore: [400], ...options }
      )
    }

    while (response.body.hits && response.body.hits.hits.length > 0) {
      // scroll id is always present in the response, but it might
      // change over time based on the number of shards
      scroll_id = response.body._scroll_id
      response.clear = clear
      addDocumentsGetter(response)

      yield response

      if (stop === true) {
        break
      }

      for (let i = 0; i <= maxRetries; i++) {
        response = await this[kClient].scroll({
          scroll: querystring.scroll,
          rest_total_hits_as_int: querystring.rest_total_hits_as_int || querystring.restTotalHitsAsInt,
          body: { scroll_id }
        }, options)
        if (response.statusCode !== 429) break
        await sleep(wait)
      }
      if (response.statusCode === 429) {
        throw new ResponseError(response)
      }
    }

    if (stop === false) {
      await clear()
    }
  }

  /**
   * Runs a scroll search operation. This function returns an async iterator, allowing
   * the user to use a for await loop to get all the documents of a given search.
   * ```js
   * for await (const document of client.helpers.scrollSearch({ params })) {
   *   console.log(document)
   * }
   * ```
   * Each document is what you will find by running a scrollSearch and iterating on the hits array.
   * This helper automatically adds `filter_path=hits.hits._source` to the querystring,
   * as it will only need the documents source.
   * @param {object} params - The Elasticsearch's search parameters.
   * @param {object} options - The client optional configuration for this request.
   * @return {iterator} the async iterator
   */
  async * scrollDocuments (params, options) {
    appendFilterPath('hits.hits._source', params, true)
    for await (const { documents } of this.scrollSearch(params)) {
      for (const document of documents) {
        yield document
      }
    }
  }

  /**
   * Creates a msearch helper instance. Once you configure it, you can use the provided
   * `search` method to add new searches in the queue.
   * @param {object} options - The configuration of the msearch operations.
   * @return {object} The possible operations to run.
   */
  msearch (options = {}) {
    const client = this[kClient]
    const {
      operations = 5,
      concurrency = 5,
      flushInterval = 500,
      retries = this.maxRetries,
      wait = 5000,
      ...msearchOptions
    } = options

    let stopReading = false
    let stopError = null
    let timeoutRef = null
    const operationsStream = new Readable({
      objectMode: true,
      read (size) {}
    })

    const p = iterate()
    const helper = {
      then (onFulfilled, onRejected) {
        return p.then(onFulfilled, onRejected)
      },
      catch (onRejected) {
        return p.catch(onRejected)
      },
      stop (error = null) {
        if (stopReading === true) return
        stopReading = true
        stopError = error
        operationsStream.push(null)
      },
      // TODO: support abort a single search?
      // NOTE: the validation checks are synchronous and the callback/promise will
      //       be resolved in the same tick. We might want to fix this in the future.
      search (header, body, callback) {
        if (stopReading === true) {
          const error = stopError === null
            ? new ConfigurationError('The msearch processor has been stopped')
            : stopError
          return callback ? callback(error, {}) : Promise.reject(error)
        }

        if (!(typeof header === 'object' && header !== null && !Array.isArray(header))) {
          const error = new ConfigurationError('The header should be an object')
          return callback ? callback(error, {}) : Promise.reject(error)
        }

        if (!(typeof body === 'object' && body !== null && !Array.isArray(body))) {
          const error = new ConfigurationError('The body should be an object')
          return callback ? callback(error, {}) : Promise.reject(error)
        }

        let promise = null
        if (callback === undefined) {
          let onFulfilled = null
          let onRejected = null
          promise = new Promise((resolve, reject) => {
            onFulfilled = resolve
            onRejected = reject
          })
          callback = function callback (err, result) {
            err ? onRejected(err) : onFulfilled(result)
          }
        }

        operationsStream.push([header, body, callback])

        if (promise !== null) {
          return promise
        }
      }
    }

    return helper

    async function iterate () {
      const { semaphore, finish } = buildSemaphore()
      const msearchBody = []
      const callbacks = []
      let loadedOperations = 0
      timeoutRef = setTimeout(onFlushTimeout, flushInterval)

      for await (const operation of operationsStream) {
        timeoutRef.refresh()
        loadedOperations += 1
        msearchBody.push(operation[0], operation[1])
        callbacks.push(operation[2])
        if (loadedOperations >= operations) {
          const send = await semaphore()
          send(msearchBody.slice(), callbacks.slice())
          msearchBody.length = 0
          callbacks.length = 0
          loadedOperations = 0
        }
      }

      clearTimeout(timeoutRef)
      // In some cases the previos http call does not have finished,
      // or we didn't reach the flush bytes threshold, so we force one last operation.
      if (loadedOperations > 0) {
        const send = await semaphore()
        send(msearchBody, callbacks)
      }

      await finish()

      if (stopError !== null) {
        throw stopError
      }

      async function onFlushTimeout () {
        if (loadedOperations === 0) return
        const msearchBodyCopy = msearchBody.slice()
        const callbacksCopy = callbacks.slice()
        msearchBody.length = 0
        callbacks.length = 0
        loadedOperations = 0
        try {
          const send = await semaphore()
          send(msearchBodyCopy, callbacksCopy)
        } catch (err) {
          /* istanbul ignore next */
          helper.stop(err)
        }
      }
    }

    // This function builds a semaphore using the concurrency
    // options of the msearch helper. It is used inside the iterator
    // to guarantee that no more than the number of operations
    // allowed to run at the same time are executed.
    // It returns a semaphore function which resolves in the next tick
    // if we didn't reach the maximim concurrency yet, otherwise it returns
    // a promise that resolves as soon as one of the running request has finshed.
    // The semaphore function resolves a send function, which will be used
    // to send the actual msearch request.
    // It also returns a finish function, which returns a promise that is resolved
    // when there are no longer request running.
    function buildSemaphore () {
      let resolveSemaphore = null
      let resolveFinish = null
      let running = 0

      return { semaphore, finish }

      function finish () {
        return new Promise((resolve, reject) => {
          if (running === 0) {
            resolve()
          } else {
            resolveFinish = resolve
          }
        })
      }

      function semaphore () {
        if (running < concurrency) {
          running += 1
          return pImmediate(send)
        } else {
          return new Promise((resolve, reject) => {
            resolveSemaphore = resolve
          })
        }
      }

      function send (msearchBody, callbacks) {
        /* istanbul ignore if */
        if (running > concurrency) {
          throw new Error('Max concurrency reached')
        }
        msearchOperation(msearchBody, callbacks, () => {
          running -= 1
          if (resolveSemaphore) {
            running += 1
            resolveSemaphore(send)
            resolveSemaphore = null
          } else if (resolveFinish && running === 0) {
            resolveFinish()
          }
        })
      }
    }

    function msearchOperation (msearchBody, callbacks, done) {
      let retryCount = retries

      // Instead of going full on async-await, which would make the code easier to read,
      // we have decided to use callback style instead.
      // This because every time we use async await, V8 will create multiple promises
      // behind the scenes, making the code slightly slower.
      tryMsearch(msearchBody, callbacks, retrySearch)
      function retrySearch (msearchBody, callbacks) {
        if (msearchBody.length > 0 && retryCount > 0) {
          retryCount -= 1
          setTimeout(tryMsearch, wait, msearchBody, callbacks, retrySearch)
          return
        }

        done()
      }

      // This function never returns an error, if the msearch operation fails,
      // the error is dispatched to all search executors.
      function tryMsearch (msearchBody, callbacks, done) {
        client.msearch(Object.assign({}, msearchOptions, { body: msearchBody }), (err, results) => {
          const retryBody = []
          const retryCallbacks = []
          if (err) {
            addDocumentsGetter(results)
            for (const callback of callbacks) {
              callback(err, results)
            }
            return done(retryBody, retryCallbacks)
          }
          const { responses } = results.body
          for (let i = 0, len = responses.length; i < len; i++) {
            const response = responses[i]
            if (response.status === 429 && retryCount > 0) {
              retryBody.push(msearchBody[i * 2])
              retryBody.push(msearchBody[(i * 2) + 1])
              retryCallbacks.push(callbacks[i])
              continue
            }
            const result = { ...results, body: response }
            addDocumentsGetter(result)
            if (response.status >= 400) {
              callbacks[i](new ResponseError(result), result)
            } else {
              callbacks[i](null, result)
            }
          }
          done(retryBody, retryCallbacks)
        })
      }
    }
  }

  /**
   * Creates a bulk helper instance. Once you configure it, you can pick which operation
   * to execute with the given dataset, index, create, update, and delete.
   * @param {object} options - The configuration of the bulk operation.
   * @return {object} The possible operations to run with the datasource.
   */
  bulk (options) {
    const client = this[kClient]
    const { serialize, deserialize } = client.serializer
    const reqOptions = this[kMetaHeader] !== null ? { headers: { 'x-elastic-client-meta': this[kMetaHeader] + ',h=bp' } } : {}
    const {
      datasource,
      onDocument,
      flushBytes = 5000000,
      flushInterval = 30000,
      concurrency = 5,
      retries = this.maxRetries,
      wait = 5000,
      onDrop = noop,
      refreshOnCompletion = false,
      ...bulkOptions
    } = options

    if (datasource === undefined) {
      return Promise.reject(new ConfigurationError('bulk helper: the datasource is required'))
    }
    if (!(Array.isArray(datasource) || Buffer.isBuffer(datasource) || typeof datasource.pipe === 'function' || datasource[Symbol.asyncIterator])) {
      return Promise.reject(new ConfigurationError('bulk helper: the datasource must be an array or a buffer or a readable stream or an async generator'))
    }
    if (onDocument === undefined) {
      return Promise.reject(new ConfigurationError('bulk helper: the onDocument callback is required'))
    }

    let shouldAbort = false
    let timeoutRef = null
    const stats = {
      total: 0,
      failed: 0,
      retry: 0,
      successful: 0,
      time: 0,
      bytes: 0,
      aborted: false
    }

    const p = iterate()
    const helper = {
      then (onFulfilled, onRejected) {
        return p.then(onFulfilled, onRejected)
      },
      catch (onRejected) {
        return p.catch(onRejected)
      },
      abort () {
        clearTimeout(timeoutRef)
        shouldAbort = true
        stats.aborted = true
        return this
      }
    }

    return helper

    /**
     * Function that iterates over the given datasource and start a bulk operation as soon
     * as it reaches the configured bulk size. It's designed to use the Node.js asynchronous
     * model at this maximum capacity, as it will collect the next body to send while there is
     * a running http call. In this way, the CPU time will be used carefully.
     * The objects will be serialized right away, to approximate the byte length of the body.
     * It creates an array of strings instead of a ndjson string because the bulkOperation
     * will navigate the body for matching failed operations with the original document.
     */
    async function iterate () {
      const { semaphore, finish } = buildSemaphore()
      const startTime = Date.now()
      const bulkBody = []
      let actionBody = ''
      let payloadBody = ''
      let chunkBytes = 0
      timeoutRef = setTimeout(onFlushTimeout, flushInterval)

      for await (const chunk of datasource) {
        if (shouldAbort === true) break
        timeoutRef.refresh()
        const action = onDocument(chunk)
        const operation = Array.isArray(action)
          ? Object.keys(action[0])[0]
          : Object.keys(action)[0]
        if (operation === 'index' || operation === 'create') {
          actionBody = serialize(action)
          payloadBody = typeof chunk === 'string' ? chunk : serialize(chunk)
          chunkBytes += Buffer.byteLength(actionBody) + Buffer.byteLength(payloadBody)
          bulkBody.push(actionBody, payloadBody)
        } else if (operation === 'update') {
          actionBody = serialize(action[0])
          payloadBody = typeof chunk === 'string'
            ? `{"doc":${chunk}}`
            : serialize({ doc: chunk, ...action[1] })
          chunkBytes += Buffer.byteLength(actionBody) + Buffer.byteLength(payloadBody)
          bulkBody.push(actionBody, payloadBody)
        } else if (operation === 'delete') {
          actionBody = serialize(action)
          chunkBytes += Buffer.byteLength(actionBody)
          bulkBody.push(actionBody)
        } else {
          clearTimeout(timeoutRef)
          throw new ConfigurationError(`Bulk helper invalid action: '${operation}'`)
        }

        if (chunkBytes >= flushBytes) {
          stats.bytes += chunkBytes
          const send = await semaphore()
          send(bulkBody.slice())
          bulkBody.length = 0
          chunkBytes = 0
        }
      }

      clearTimeout(timeoutRef)
      // In some cases the previos http call does not have finished,
      // or we didn't reach the flush bytes threshold, so we force one last operation.
      if (shouldAbort === false && chunkBytes > 0) {
        const send = await semaphore()
        stats.bytes += chunkBytes
        send(bulkBody)
      }

      await finish()

      if (refreshOnCompletion) {
        await client.indices.refresh({
          index: typeof refreshOnCompletion === 'string'
            ? refreshOnCompletion
            : '_all'
        })
      }

      stats.time = Date.now() - startTime
      stats.total = stats.successful + stats.failed

      return stats

      async function onFlushTimeout () {
        if (chunkBytes === 0) return
        stats.bytes += chunkBytes
        const bulkBodyCopy = bulkBody.slice()
        bulkBody.length = 0
        chunkBytes = 0
        try {
          const send = await semaphore()
          send(bulkBodyCopy)
        } catch (err) {
          /* istanbul ignore next */
          helper.abort()
        }
      }
    }

    // This function builds a semaphore using the concurrency
    // options of the bulk helper. It is used inside the iterator
    // to guarantee that no more than the number of operations
    // allowed to run at the same time are executed.
    // It returns a semaphore function which resolves in the next tick
    // if we didn't reach the maximim concurrency yet, otherwise it returns
    // a promise that resolves as soon as one of the running request has finshed.
    // The semaphore function resolves a send function, which will be used
    // to send the actual bulk request.
    // It also returns a finish function, which returns a promise that is resolved
    // when there are no longer request running. It rejects an error if one
    // of the request has failed for some reason.
    function buildSemaphore () {
      let resolveSemaphore = null
      let resolveFinish = null
      let rejectFinish = null
      let error = null
      let running = 0

      return { semaphore, finish }

      function finish () {
        return new Promise((resolve, reject) => {
          if (running === 0) {
            if (error) {
              reject(error)
            } else {
              resolve()
            }
          } else {
            resolveFinish = resolve
            rejectFinish = reject
          }
        })
      }

      function semaphore () {
        if (running < concurrency) {
          running += 1
          return pImmediate(send)
        } else {
          return new Promise((resolve, reject) => {
            resolveSemaphore = resolve
          })
        }
      }

      function send (bulkBody) {
        /* istanbul ignore if */
        if (running > concurrency) {
          throw new Error('Max concurrency reached')
        }
        bulkOperation(bulkBody, err => {
          running -= 1
          if (err) {
            shouldAbort = true
            error = err
          }
          if (resolveSemaphore) {
            running += 1
            resolveSemaphore(send)
            resolveSemaphore = null
          } else if (resolveFinish && running === 0) {
            if (error) {
              rejectFinish(error)
            } else {
              resolveFinish()
            }
          }
        })
      }
    }

    function bulkOperation (bulkBody, callback) {
      let retryCount = retries
      let isRetrying = false

      // Instead of going full on async-await, which would make the code easier to read,
      // we have decided to use callback style instead.
      // This because every time we use async await, V8 will create multiple promises
      // behind the scenes, making the code slightly slower.
      tryBulk(bulkBody, retryDocuments)
      function retryDocuments (err, bulkBody) {
        if (err) return callback(err)
        if (shouldAbort === true) return callback()

        if (bulkBody.length > 0) {
          if (retryCount > 0) {
            isRetrying = true
            retryCount -= 1
            stats.retry += bulkBody.length
            setTimeout(tryBulk, wait, bulkBody, retryDocuments)
            return
          }
          for (let i = 0, len = bulkBody.length; i < len; i = i + 2) {
            const operation = Object.keys(deserialize(bulkBody[i]))[0]
            onDrop({
              status: 429,
              error: null,
              operation: deserialize(bulkBody[i]),
              document: operation !== 'delete'
                ? deserialize(bulkBody[i + 1])
                /* istanbul ignore next */
                : null,
              retried: isRetrying
            })
            stats.failed += 1
          }
        }
        callback()
      }

      function tryBulk (bulkBody, callback) {
        if (shouldAbort === true) return callback(null, [])
        client.bulk(Object.assign({}, bulkOptions, { body: bulkBody }), reqOptions, (err, { body }) => {
          if (err) return callback(err, null)
          if (body.errors === false) {
            stats.successful += body.items.length
            return callback(null, [])
          }
          const retry = []
          const { items } = body
          for (let i = 0, len = items.length; i < len; i++) {
            const action = items[i]
            const operation = Object.keys(action)[0]
            const { status } = action[operation]
            const indexSlice = operation !== 'delete' ? i * 2 : i

            if (status >= 400) {
              // 429 is the only staus code where we might want to retry
              // a document, because it was not an error in the document itself,
              // but the ES node were handling too many operations.
              if (status === 429) {
                retry.push(bulkBody[indexSlice])
                /* istanbul ignore next */
                if (operation !== 'delete') {
                  retry.push(bulkBody[indexSlice + 1])
                }
              } else {
                onDrop({
                  status: status,
                  error: action[operation].error,
                  operation: deserialize(bulkBody[indexSlice]),
                  document: operation !== 'delete'
                    ? deserialize(bulkBody[indexSlice + 1])
                    : null,
                  retried: isRetrying
                })
                stats.failed += 1
              }
            } else {
              stats.successful += 1
            }
          }
          callback(null, retry)
        })
      }
    }
  }
}

// Using a getter will improve the overall performances of the code,
// as we will reed the documents only if needed.
function addDocumentsGetter (result) {
  Object.defineProperty(result, 'documents', {
    get () {
      if (this.body.hits && this.body.hits.hits) {
        return this.body.hits.hits.map(d => d._source)
      }
      return []
    }
  })
}

function appendFilterPath (filter, params, force) {
  if (params.filter_path !== undefined) {
    params.filter_path += ',' + filter
  } else if (params.filterPath !== undefined) {
    params.filterPath += ',' + filter
  } else if (force === true) {
    params.filter_path = filter
  }
}

module.exports = Helpers


/***/ }),

/***/ 5239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const { stringify } = __webpack_require__(1191)
const debug = __webpack_require__(9558)('elasticsearch')
const sjson = __webpack_require__(6872)
const { SerializationError, DeserializationError } = __webpack_require__(7095)

class Serializer {
  serialize (object) {
    debug('Serializing', object)
    try {
      var json = JSON.stringify(object)
    } catch (err) {
      throw new SerializationError(err.message, object)
    }
    return json
  }

  deserialize (json) {
    debug('Deserializing', json)
    try {
      var object = sjson.parse(json)
    } catch (err) {
      throw new DeserializationError(err.message, json)
    }
    return object
  }

  ndserialize (array) {
    debug('ndserialize', array)
    if (Array.isArray(array) === false) {
      throw new SerializationError('The argument provided is not an array')
    }
    var ndjson = ''
    for (var i = 0, len = array.length; i < len; i++) {
      if (typeof array[i] === 'string') {
        ndjson += array[i] + '\n'
      } else {
        ndjson += this.serialize(array[i]) + '\n'
      }
    }
    return ndjson
  }

  qserialize (object) {
    debug('qserialize', object)
    if (object == null) return ''
    if (typeof object === 'string') return object
    // arrays should be serialized as comma separated list
    const keys = Object.keys(object)
    for (var i = 0, len = keys.length; i < len; i++) {
      var key = keys[i]
      // elasticsearch will complain for keys without a value
      if (object[key] === undefined) {
        delete object[key]
      } else if (Array.isArray(object[key]) === true) {
        object[key] = object[key].join(',')
      }
    }
    return stringify(object)
  }
}

module.exports = Serializer


/***/ }),

/***/ 5532:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const debug = __webpack_require__(9558)('elasticsearch')
const os = __webpack_require__(2087)
const { gzip, unzip, createGzip } = __webpack_require__(8761)
const buffer = __webpack_require__(4293)
const ms = __webpack_require__(732)
const {
  ConnectionError,
  RequestAbortedError,
  NoLivingConnectionsError,
  ResponseError,
  ConfigurationError
} = __webpack_require__(7095)

const noop = () => {}

const clientVersion = __webpack_require__(7529)/* .version */ .i8
const userAgent = `elasticsearch-js/${clientVersion} (${os.platform()} ${os.release()}-${os.arch()}; Node.js ${process.version})`
const MAX_BUFFER_LENGTH = buffer.constants.MAX_LENGTH
const MAX_STRING_LENGTH = buffer.constants.MAX_STRING_LENGTH

class Transport {
  constructor (opts) {
    if (typeof opts.compression === 'string' && opts.compression !== 'gzip') {
      throw new ConfigurationError(`Invalid compression: '${opts.compression}'`)
    }

    this.emit = opts.emit
    this.connectionPool = opts.connectionPool
    this.serializer = opts.serializer
    this.maxRetries = opts.maxRetries
    this.requestTimeout = toMs(opts.requestTimeout)
    this.suggestCompression = opts.suggestCompression === true
    this.compression = opts.compression || false
    this.context = opts.context || null
    this.headers = Object.assign({},
      { 'user-agent': userAgent },
      opts.suggestCompression === true ? { 'accept-encoding': 'gzip,deflate' } : null,
      lowerCaseHeaders(opts.headers)
    )
    this.sniffInterval = opts.sniffInterval
    this.sniffOnConnectionFault = opts.sniffOnConnectionFault
    this.sniffEndpoint = opts.sniffEndpoint
    this.generateRequestId = opts.generateRequestId || generateRequestId()
    this.name = opts.name
    this.opaqueIdPrefix = opts.opaqueIdPrefix

    this.nodeFilter = opts.nodeFilter || defaultNodeFilter
    if (typeof opts.nodeSelector === 'function') {
      this.nodeSelector = opts.nodeSelector
    } else if (opts.nodeSelector === 'round-robin') {
      this.nodeSelector = roundRobinSelector()
    } else if (opts.nodeSelector === 'random') {
      this.nodeSelector = randomSelector
    } else {
      this.nodeSelector = roundRobinSelector()
    }

    this._sniffEnabled = typeof this.sniffInterval === 'number'
    this._nextSniff = this._sniffEnabled ? (Date.now() + this.sniffInterval) : 0
    this._isSniffing = false

    if (opts.sniffOnStart === true) {
      this.sniff({ reason: Transport.sniffReasons.SNIFF_ON_START })
    }
  }

  request (params, options, callback) {
    options = options || {}
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    var p = null

    // promises support
    if (callback === undefined) {
      let onFulfilled = null
      let onRejected = null
      p = new Promise((resolve, reject) => {
        onFulfilled = resolve
        onRejected = reject
      })
      callback = function callback (err, result) {
        err ? onRejected(err) : onFulfilled(result)
      }
    }

    const meta = {
      context: null,
      request: {
        params: null,
        options: null,
        id: options.id || this.generateRequestId(params, options)
      },
      name: this.name,
      connection: null,
      attempts: 0,
      aborted: false
    }

    if (this.context != null && options.context != null) {
      meta.context = Object.assign({}, this.context, options.context)
    } else if (this.context != null) {
      meta.context = this.context
    } else if (options.context != null) {
      meta.context = options.context
    }

    const result = {
      body: null,
      statusCode: null,
      headers: null,
      meta
    }

    Object.defineProperty(result, 'warnings', {
      get () {
        return this.headers && this.headers.warning
          ? this.headers.warning.split(/(?!\B"[^"]*),(?![^"]*"\B)/)
          : null
      }
    })

    // We should not retry if we are sending a stream body, because we should store in memory
    // a copy of the stream to be able to send it again, but since we don't know in advance
    // the size of the stream, we risk to take too much memory.
    // Furthermore, copying everytime the stream is very a expensive operation.
    const maxRetries = isStream(params.body) || isStream(params.bulkBody)
      ? 0 : (typeof options.maxRetries === 'number' ? options.maxRetries : this.maxRetries)
    const compression = options.compression !== undefined ? options.compression : this.compression
    var request = { abort: noop }
    const transportReturn = {
      then (onFulfilled, onRejected) {
        return p.then(onFulfilled, onRejected)
      },
      catch (onRejected) {
        return p.catch(onRejected)
      },
      abort () {
        meta.aborted = true
        request.abort()
        debug('Aborting request', params)
        return this
      }
    }

    const makeRequest = () => {
      if (meta.aborted === true) {
        return process.nextTick(callback, new RequestAbortedError(), result)
      }
      meta.connection = this.getConnection({ requestId: meta.request.id })
      if (meta.connection == null) {
        return process.nextTick(callback, new NoLivingConnectionsError(), result)
      }
      this.emit('request', null, result)
      // perform the actual http request
      request = meta.connection.request(params, onResponse)
    }

    const onConnectionError = (err) => {
      if (err.name !== 'RequestAbortedError') {
        // if there is an error in the connection
        // let's mark the connection as dead
        this.connectionPool.markDead(meta.connection)

        if (this.sniffOnConnectionFault === true) {
          this.sniff({
            reason: Transport.sniffReasons.SNIFF_ON_CONNECTION_FAULT,
            requestId: meta.request.id
          })
        }

        // retry logic
        if (meta.attempts < maxRetries) {
          meta.attempts++
          debug(`Retrying request, there are still ${maxRetries - meta.attempts} attempts`, params)
          makeRequest()
          return
        }
      }

      err.meta = result
      this.emit('response', err, result)
      return callback(err, result)
    }

    const onResponse = (err, response) => {
      if (err !== null) {
        return onConnectionError(err)
      }

      result.statusCode = response.statusCode
      result.headers = response.headers

      if (options.asStream === true) {
        result.body = response
        this.emit('response', null, result)
        callback(null, result)
        return
      }

      const contentEncoding = (result.headers['content-encoding'] || '').toLowerCase()
      const isCompressed = contentEncoding.indexOf('gzip') > -1 || contentEncoding.indexOf('deflate') > -1

      /* istanbul ignore else */
      if (result.headers['content-length'] !== undefined) {
        const contentLength = Number(result.headers['content-length'])
        if (isCompressed && contentLength > MAX_BUFFER_LENGTH) {
          response.destroy()
          return onConnectionError(
            new RequestAbortedError(`The content length (${contentLength}) is bigger than the maximum allowed buffer (${MAX_BUFFER_LENGTH})`, result)
          )
        } else if (contentLength > MAX_STRING_LENGTH) {
          response.destroy()
          return onConnectionError(
            new RequestAbortedError(`The content length (${contentLength}) is bigger than the maximum allowed string (${MAX_STRING_LENGTH})`, result)
          )
        }
      }
      // if the response is compressed, we must handle it
      // as buffer for allowing decompression later
      let payload = isCompressed ? [] : ''
      const onData = isCompressed
        ? chunk => { payload.push(chunk) }
        : chunk => { payload += chunk }
      const onEnd = err => {
        response.removeListener('data', onData)
        response.removeListener('end', onEnd)
        response.removeListener('error', onEnd)
        response.removeListener('aborted', onAbort)

        if (err) {
          return onConnectionError(new ConnectionError(err.message))
        }

        if (isCompressed) {
          unzip(Buffer.concat(payload), onBody)
        } else {
          onBody(null, payload)
        }
      }

      const onAbort = () => {
        response.destroy()
        onEnd(new Error('Response aborted while reading the body'))
      }

      if (!isCompressed) {
        response.setEncoding('utf8')
      }

      this.emit('deserialization', null, result)
      response.on('data', onData)
      response.on('error', onEnd)
      response.on('end', onEnd)
      response.on('aborted', onAbort)
    }

    const onBody = (err, payload) => {
      if (err) {
        this.emit('response', err, result)
        return callback(err, result)
      }
      if (Buffer.isBuffer(payload)) {
        payload = payload.toString()
      }
      const isHead = params.method === 'HEAD'
      // we should attempt the payload deserialization only if:
      //    - a `content-type` is defined and is equal to `application/json`
      //    - the request is not a HEAD request
      //    - the payload is not an empty string
      if (result.headers['content-type'] !== undefined &&
          result.headers['content-type'].indexOf('application/json') > -1 &&
          isHead === false &&
          payload !== ''
      ) {
        try {
          result.body = this.serializer.deserialize(payload)
        } catch (err) {
          this.emit('response', err, result)
          return callback(err, result)
        }
      } else {
        // cast to boolean if the request method was HEAD
        result.body = isHead === true ? true : payload
      }

      // we should ignore the statusCode if the user has configured the `ignore` field with
      // the statusCode we just got or if the request method is HEAD and the statusCode is 404
      const ignoreStatusCode = (Array.isArray(options.ignore) && options.ignore.indexOf(result.statusCode) > -1) ||
        (isHead === true && result.statusCode === 404)

      if (ignoreStatusCode === false &&
         (result.statusCode === 502 || result.statusCode === 503 || result.statusCode === 504)) {
        // if the statusCode is 502/3/4 we should run our retry strategy
        // and mark the connection as dead
        this.connectionPool.markDead(meta.connection)
        // retry logic (we shoukd not retry on "429 - Too Many Requests")
        if (meta.attempts < maxRetries && result.statusCode !== 429) {
          meta.attempts++
          debug(`Retrying request, there are still ${maxRetries - meta.attempts} attempts`, params)
          makeRequest()
          return
        }
      } else {
        // everything has worked as expected, let's mark
        // the connection as alive (or confirm it)
        this.connectionPool.markAlive(meta.connection)
      }

      if (ignoreStatusCode === false && result.statusCode >= 400) {
        const error = new ResponseError(result)
        this.emit('response', error, result)
        callback(error, result)
      } else {
        // cast to boolean if the request method was HEAD
        if (isHead === true && result.statusCode === 404) {
          result.body = false
        }
        this.emit('response', null, result)
        callback(null, result)
      }
    }

    this.emit('serialization', null, result)
    const headers = Object.assign({}, this.headers, lowerCaseHeaders(options.headers))

    if (options.opaqueId !== undefined) {
      headers['x-opaque-id'] = this.opaqueIdPrefix !== null
        ? this.opaqueIdPrefix + options.opaqueId
        : options.opaqueId
    }

    // handle json body
    if (params.body != null) {
      if (shouldSerialize(params.body) === true) {
        try {
          params.body = this.serializer.serialize(params.body)
        } catch (err) {
          this.emit('request', err, result)
          process.nextTick(callback, err, result)
          return transportReturn
        }
      }

      if (params.body !== '') {
        headers['content-type'] = headers['content-type'] || 'application/json'
      }

    // handle ndjson body
    } else if (params.bulkBody != null) {
      if (shouldSerialize(params.bulkBody) === true) {
        try {
          params.body = this.serializer.ndserialize(params.bulkBody)
        } catch (err) {
          this.emit('request', err, result)
          process.nextTick(callback, err, result)
          return transportReturn
        }
      } else {
        params.body = params.bulkBody
      }
      if (params.body !== '') {
        headers['content-type'] = headers['content-type'] || 'application/x-ndjson'
      }
    }

    params.headers = headers
    // serializes the querystring
    if (options.querystring == null) {
      params.querystring = this.serializer.qserialize(params.querystring)
    } else {
      params.querystring = this.serializer.qserialize(
        Object.assign({}, params.querystring, options.querystring)
      )
    }

    // handles request timeout
    params.timeout = toMs(options.requestTimeout || this.requestTimeout)
    if (options.asStream === true) params.asStream = true
    meta.request.params = params
    meta.request.options = options

    // handle compression
    if (params.body !== '' && params.body != null) {
      if (isStream(params.body) === true) {
        if (compression === 'gzip') {
          params.headers['content-encoding'] = compression
          params.body = params.body.pipe(createGzip())
        }
        makeRequest()
      } else if (compression === 'gzip') {
        gzip(params.body, (err, buffer) => {
          /* istanbul ignore next */
          if (err) {
            this.emit('request', err, result)
            return callback(err, result)
          }
          params.headers['content-encoding'] = compression
          params.headers['content-length'] = '' + Buffer.byteLength(buffer)
          params.body = buffer
          makeRequest()
        })
      } else {
        params.headers['content-length'] = '' + Buffer.byteLength(params.body)
        makeRequest()
      }
    } else {
      makeRequest()
    }

    return transportReturn
  }

  getConnection (opts) {
    const now = Date.now()
    if (this._sniffEnabled === true && now > this._nextSniff) {
      this.sniff({ reason: Transport.sniffReasons.SNIFF_INTERVAL, requestId: opts.requestId })
    }
    return this.connectionPool.getConnection({
      filter: this.nodeFilter,
      selector: this.nodeSelector,
      requestId: opts.requestId,
      name: this.name,
      now
    })
  }

  sniff (opts, callback = noop) {
    if (this._isSniffing === true) return
    this._isSniffing = true
    debug('Started sniffing request')

    if (typeof opts === 'function') {
      callback = opts
      opts = { reason: Transport.sniffReasons.DEFAULT }
    }

    const { reason } = opts

    const request = {
      method: 'GET',
      path: this.sniffEndpoint
    }

    this.request(request, { id: opts.requestId }, (err, result) => {
      this._isSniffing = false
      if (this._sniffEnabled === true) {
        this._nextSniff = Date.now() + this.sniffInterval
      }

      if (err != null) {
        debug('Sniffing errored', err)
        result.meta.sniff = { hosts: [], reason }
        this.emit('sniff', err, result)
        return callback(err)
      }

      debug('Sniffing ended successfully', result.body)
      const protocol = result.meta.connection.url.protocol || /* istanbul ignore next */ 'http:'
      const hosts = this.connectionPool.nodesToHost(result.body.nodes, protocol)
      this.connectionPool.update(hosts)

      result.meta.sniff = { hosts, reason }
      this.emit('sniff', null, result)
      callback(null, hosts)
    })
  }
}

Transport.sniffReasons = {
  SNIFF_ON_START: 'sniff-on-start',
  SNIFF_INTERVAL: 'sniff-interval',
  SNIFF_ON_CONNECTION_FAULT: 'sniff-on-connection-fault',
  // TODO: find a better name
  DEFAULT: 'default'
}

function toMs (time) {
  if (typeof time === 'string') {
    return ms(time)
  }
  return time
}

function shouldSerialize (obj) {
  return typeof obj !== 'string' &&
         typeof obj.pipe !== 'function' &&
         Buffer.isBuffer(obj) === false
}

function isStream (obj) {
  return obj != null && typeof obj.pipe === 'function'
}

function defaultNodeFilter (node) {
  // avoid master only nodes
  if (node.roles.master === true &&
      node.roles.data === false &&
      node.roles.ingest === false) {
    return false
  }
  return true
}

function roundRobinSelector () {
  var current = -1
  return function _roundRobinSelector (connections) {
    if (++current >= connections.length) {
      current = 0
    }
    return connections[current]
  }
}

function randomSelector (connections) {
  const index = Math.floor(Math.random() * connections.length)
  return connections[index]
}

function generateRequestId () {
  var maxInt = 2147483647
  var nextReqId = 0
  return function genReqId (params, options) {
    return (nextReqId = (nextReqId + 1) & maxInt)
  }
}

function lowerCaseHeaders (oldHeaders) {
  if (oldHeaders == null) return oldHeaders
  const newHeaders = {}
  for (const header in oldHeaders) {
    newHeaders[header.toLowerCase()] = oldHeaders[header]
  }
  return newHeaders
}

module.exports = Transport
module.exports.internals = {
  defaultNodeFilter,
  roundRobinSelector,
  randomSelector,
  generateRequestId,
  lowerCaseHeaders
}


/***/ }),

/***/ 7095:
/***/ ((module) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



class ElasticsearchClientError extends Error {
  constructor (message) {
    super(message)
    this.name = 'ElasticsearchClientError'
  }
}

class TimeoutError extends ElasticsearchClientError {
  constructor (message, meta) {
    super(message)
    Error.captureStackTrace(this, TimeoutError)
    this.name = 'TimeoutError'
    this.message = message || 'Timeout Error'
    this.meta = meta
  }
}

class ConnectionError extends ElasticsearchClientError {
  constructor (message, meta) {
    super(message)
    Error.captureStackTrace(this, ConnectionError)
    this.name = 'ConnectionError'
    this.message = message || 'Connection Error'
    this.meta = meta
  }
}

class NoLivingConnectionsError extends ElasticsearchClientError {
  constructor (message, meta) {
    super(message)
    Error.captureStackTrace(this, NoLivingConnectionsError)
    this.name = 'NoLivingConnectionsError'
    this.message = message || 'Given the configuration, the ConnectionPool was not able to find a usable Connection for this request.'
    this.meta = meta
  }
}

class SerializationError extends ElasticsearchClientError {
  constructor (message, data) {
    super(message, data)
    Error.captureStackTrace(this, SerializationError)
    this.name = 'SerializationError'
    this.message = message || 'Serialization Error'
    this.data = data
  }
}

class DeserializationError extends ElasticsearchClientError {
  constructor (message, data) {
    super(message, data)
    Error.captureStackTrace(this, DeserializationError)
    this.name = 'DeserializationError'
    this.message = message || 'Deserialization Error'
    this.data = data
  }
}

class ConfigurationError extends ElasticsearchClientError {
  constructor (message) {
    super(message)
    Error.captureStackTrace(this, ConfigurationError)
    this.name = 'ConfigurationError'
    this.message = message || 'Configuration Error'
  }
}

class ResponseError extends ElasticsearchClientError {
  constructor (meta) {
    super('Response Error')
    Error.captureStackTrace(this, ResponseError)
    this.name = 'ResponseError'
    this.message = (meta.body && meta.body.error && meta.body.error.type) || 'Response Error'
    this.meta = meta
  }

  get body () {
    return this.meta.body
  }

  get statusCode () {
    if (this.meta.body && typeof this.meta.body.status === 'number') {
      return this.meta.body.status
    }
    return this.meta.statusCode
  }

  get headers () {
    return this.meta.headers
  }
}

class RequestAbortedError extends ElasticsearchClientError {
  constructor (message, meta) {
    super(message)
    Error.captureStackTrace(this, RequestAbortedError)
    this.name = 'RequestAbortedError'
    this.message = message || 'Request aborted'
    this.meta = meta
  }
}

module.exports = {
  ElasticsearchClientError,
  TimeoutError,
  ConnectionError,
  NoLivingConnectionsError,
  SerializationError,
  DeserializationError,
  ConfigurationError,
  ResponseError,
  RequestAbortedError
}


/***/ }),

/***/ 6474:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const { URL } = __webpack_require__(8835)
const debug = __webpack_require__(9558)('elasticsearch')
const Connection = __webpack_require__(6508)
const noop = () => {}

class BaseConnectionPool {
  constructor (opts) {
    // list of nodes and weights
    this.connections = []
    // how many nodes we have in our scheduler
    this.size = this.connections.length
    this.Connection = opts.Connection
    this.emit = opts.emit || noop
    this.auth = opts.auth || null
    this._ssl = opts.ssl
    this._agent = opts.agent
    this._proxy = opts.proxy || null
  }

  getConnection () {
    throw new Error('getConnection must be implemented')
  }

  markAlive () {
    return this
  }

  markDead () {
    return this
  }

  /**
   * Creates a new connection instance.
   */
  createConnection (opts) {
    if (typeof opts === 'string') {
      opts = this.urlToHost(opts)
    }

    if (this.auth !== null) {
      opts.auth = this.auth
    } else if (opts.url.username !== '' && opts.url.password !== '') {
      opts.auth = {
        username: decodeURIComponent(opts.url.username),
        password: decodeURIComponent(opts.url.password)
      }
    }

    if (opts.ssl == null) opts.ssl = this._ssl
    /* istanbul ignore else */
    if (opts.agent == null) opts.agent = this._agent
    /* istanbul ignore else */
    if (opts.proxy == null) opts.proxy = this._proxy

    const connection = new this.Connection(opts)

    for (const conn of this.connections) {
      if (conn.id === connection.id) {
        throw new Error(`Connection with id '${connection.id}' is already present`)
      }
    }

    return connection
  }

  /**
   * Adds a new connection to the pool.
   *
   * @param {object|string} host
   * @returns {ConnectionPool}
   */
  addConnection (opts) {
    if (Array.isArray(opts)) {
      return opts.forEach(o => this.addConnection(o))
    }

    if (typeof opts === 'string') {
      opts = this.urlToHost(opts)
    }

    const connectionById = this.connections.find(c => c.id === opts.id)
    const connectionByUrl = this.connections.find(c => c.id === opts.url.href)

    if (connectionById || connectionByUrl) {
      throw new Error(`Connection with id '${opts.id || opts.url.href}' is already present`)
    }

    this.update([...this.connections, opts])
    return this.connections[this.size - 1]
  }

  /**
   * Removes a new connection to the pool.
   *
   * @param {object} connection
   * @returns {ConnectionPool}
   */
  removeConnection (connection) {
    debug('Removing connection', connection)
    return this.update(this.connections.filter(c => c.id !== connection.id))
  }

  /**
   * Empties the connection pool.
   *
   * @returns {ConnectionPool}
   */
  empty (callback) {
    debug('Emptying the connection pool')
    var openConnections = this.size
    this.connections.forEach(connection => {
      connection.close(() => {
        if (--openConnections === 0) {
          this.connections = []
          this.size = this.connections.length
          callback()
        }
      })
    })
  }

  /**
   * Update the ConnectionPool with new connections.
   *
   * @param {array} array of connections
   * @returns {ConnectionPool}
   */
  update (nodes) {
    debug('Updating the connection pool')
    const newConnections = []
    const oldConnections = []

    for (const node of nodes) {
      // if we already have a given connection in the pool
      // we mark it as alive and we do not close the connection
      // to avoid socket issues
      const connectionById = this.connections.find(c => c.id === node.id)
      const connectionByUrl = this.connections.find(c => c.id === node.url.href)
      if (connectionById) {
        debug(`The connection with id '${node.id}' is already present`)
        this.markAlive(connectionById)
        newConnections.push(connectionById)
      // in case the user has passed a single url (or an array of urls),
      // the connection id will be the full href; to avoid closing valid connections
      // because are not present in the pool, we check also the node url,
      // and if is already present we update its id with the ES provided one.
      } else if (connectionByUrl) {
        connectionByUrl.id = node.id
        this.markAlive(connectionByUrl)
        newConnections.push(connectionByUrl)
      } else {
        newConnections.push(this.createConnection(node))
      }
    }

    const ids = nodes.map(c => c.id)
    // remove all the dead connections and old connections
    for (const connection of this.connections) {
      if (ids.indexOf(connection.id) === -1) {
        oldConnections.push(connection)
      }
    }

    // close old connections
    oldConnections.forEach(connection => connection.close())

    this.connections = newConnections
    this.size = this.connections.length

    return this
  }

  /**
   * Transforms the nodes objects to a host object.
   *
   * @param {object} nodes
   * @returns {array} hosts
   */
  nodesToHost (nodes, protocol) {
    const ids = Object.keys(nodes)
    const hosts = []

    for (var i = 0, len = ids.length; i < len; i++) {
      const node = nodes[ids[i]]
      // If there is no protocol in
      // the `publish_address` new URL will throw
      // the publish_address can have two forms:
      //   - ip:port
      //   - hostname/ip:port
      // if we encounter the second case, we should
      // use the hostname instead of the ip
      var address = node.http.publish_address
      const parts = address.split('/')
      // the url is in the form of hostname/ip:port
      if (parts.length > 1) {
        const hostname = parts[0]
        const port = parts[1].match(/((?::))(?:[0-9]+)$/g)[0].slice(1)
        address = `${hostname}:${port}`
      }

      address = address.slice(0, 4) === 'http'
        /* istanbul ignore next */
        ? address
        : `${protocol}//${address}`
      const roles = node.roles.reduce((acc, role) => {
        acc[role] = true
        return acc
      }, {})

      hosts.push({
        url: new URL(address),
        id: ids[i],
        roles: Object.assign({
          [Connection.roles.MASTER]: false,
          [Connection.roles.DATA]: false,
          [Connection.roles.INGEST]: false,
          [Connection.roles.ML]: false
        }, roles)
      })
    }

    return hosts
  }

  /**
   * Transforms an url string to a host object
   *
   * @param {string} url
   * @returns {object} host
   */
  urlToHost (url) {
    return {
      url: new URL(url)
    }
  }
}

module.exports = BaseConnectionPool


/***/ }),

/***/ 5521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const BaseConnectionPool = __webpack_require__(6474)

class CloudConnectionPool extends BaseConnectionPool {
  constructor (opts) {
    super(opts)
    this.cloudConnection = null
  }

  /**
   * Returns the only cloud connection.
   *
   * @returns {object} connection
   */
  getConnection () {
    return this.cloudConnection
  }

  /**
   * Empties the connection pool.
   *
   * @returns {ConnectionPool}
   */
  empty (callback) {
    super.empty(() => {
      this.cloudConnection = null
      callback()
    })
  }

  /**
   * Update the ConnectionPool with new connections.
   *
   * @param {array} array of connections
   * @returns {ConnectionPool}
   */
  update (connections) {
    super.update(connections)
    this.cloudConnection = this.connections[0]
    return this
  }
}

module.exports = CloudConnectionPool


/***/ }),

/***/ 6279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const BaseConnectionPool = __webpack_require__(6474)
const assert = __webpack_require__(2357)
const debug = __webpack_require__(9558)('elasticsearch')
const Connection = __webpack_require__(6508)
const noop = () => {}

class ConnectionPool extends BaseConnectionPool {
  constructor (opts) {
    super(opts)

    this.dead = []
    // the resurrect timeout is 60s
    this.resurrectTimeout = 1000 * 60
    // number of consecutive failures after which
    // the timeout doesn't increase
    this.resurrectTimeoutCutoff = 5
    this.pingTimeout = opts.pingTimeout
    this._sniffEnabled = opts.sniffEnabled || false

    const resurrectStrategy = opts.resurrectStrategy || 'ping'
    this.resurrectStrategy = ConnectionPool.resurrectStrategies[resurrectStrategy]
    assert(
      this.resurrectStrategy != null,
      `Invalid resurrection strategy: '${resurrectStrategy}'`
    )
  }

  /**
   * Marks a connection as 'alive'.
   * If needed removes the connection from the dead list
   * and then resets the `deadCount`.
   *
   * @param {object} connection
   */
  markAlive (connection) {
    const { id } = connection
    debug(`Marking as 'alive' connection '${id}'`)
    const index = this.dead.indexOf(id)
    if (index > -1) this.dead.splice(index, 1)
    connection.status = Connection.statuses.ALIVE
    connection.deadCount = 0
    connection.resurrectTimeout = 0
    return this
  }

  /**
   * Marks a connection as 'dead'.
   * If needed adds the connection to the dead list
   * and then increments the `deadCount`.
   *
   * @param {object} connection
   */
  markDead (connection) {
    const { id } = connection
    debug(`Marking as 'dead' connection '${id}'`)
    if (this.dead.indexOf(id) === -1) {
      // It might happen that `markDead` is called jsut after
      // a pool update, and in such case we will add to the dead
      // list a node that no longer exist. The following check verify
      // that the connection is still part of the pool before
      // marking it as dead.
      for (var i = 0; i < this.size; i++) {
        if (this.connections[i].id === id) {
          this.dead.push(id)
          break
        }
      }
    }
    connection.status = Connection.statuses.DEAD
    connection.deadCount++
    // resurrectTimeout formula:
    // `resurrectTimeout * 2 ** min(deadCount - 1, resurrectTimeoutCutoff)`
    connection.resurrectTimeout = Date.now() + this.resurrectTimeout * Math.pow(
      2, Math.min(connection.deadCount - 1, this.resurrectTimeoutCutoff)
    )

    // sort the dead list in ascending order
    // based on the resurrectTimeout
    this.dead.sort((a, b) => {
      const conn1 = this.connections.find(c => c.id === a)
      const conn2 = this.connections.find(c => c.id === b)
      return conn1.resurrectTimeout - conn2.resurrectTimeout
    })

    return this
  }

  /**
   * If enabled, tries to resurrect a connection with the given
   * resurrect strategy ('ping', 'optimistic', 'none').
   *
   * @param {object} { now, requestId }
   * @param {function} callback (isAlive, connection)
   */
  resurrect (opts, callback = noop) {
    if (this.resurrectStrategy === 0 || this.dead.length === 0) {
      debug('Nothing to resurrect')
      callback(null, null)
      return
    }

    // the dead list is sorted in ascending order based on the timeout
    // so the first element will always be the one with the smaller timeout
    const connection = this.connections.find(c => c.id === this.dead[0])
    if ((opts.now || Date.now()) < connection.resurrectTimeout) {
      debug('Nothing to resurrect')
      callback(null, null)
      return
    }

    const { id } = connection

    // ping strategy
    if (this.resurrectStrategy === 1) {
      connection.request({
        method: 'HEAD',
        path: '/',
        timeout: this.pingTimeout
      }, (err, response) => {
        var isAlive = true
        const statusCode = response !== null ? response.statusCode : 0
        if (err != null ||
           (statusCode === 502 || statusCode === 503 || statusCode === 504)) {
          debug(`Resurrect: connection '${id}' is still dead`)
          this.markDead(connection)
          isAlive = false
        } else {
          debug(`Resurrect: connection '${id}' is now alive`)
          this.markAlive(connection)
        }
        this.emit('resurrect', null, {
          strategy: 'ping',
          name: opts.name,
          request: { id: opts.requestId },
          isAlive,
          connection
        })
        callback(isAlive, connection)
      })
    // optimistic strategy
    } else {
      debug(`Resurrect: optimistic resurrection for connection '${id}'`)
      this.dead.splice(this.dead.indexOf(id), 1)
      connection.status = Connection.statuses.ALIVE
      this.emit('resurrect', null, {
        strategy: 'optimistic',
        name: opts.name,
        request: { id: opts.requestId },
        isAlive: true,
        connection
      })
      // eslint-disable-next-line standard/no-callback-literal
      callback(true, connection)
    }
  }

  /**
   * Returns an alive connection if present,
   * otherwise returns a dead connection.
   * By default it filters the `master` only nodes.
   * It uses the selector to choose which
   * connection return.
   *
   * @param {object} options (filter and selector)
   * @returns {object|null} connection
   */
  getConnection (opts = {}) {
    const filter = opts.filter || (() => true)
    const selector = opts.selector || (c => c[0])

    this.resurrect({
      now: opts.now,
      requestId: opts.requestId,
      name: opts.name
    })

    const noAliveConnections = this.size === this.dead.length

    // TODO: can we cache this?
    const connections = []
    for (var i = 0; i < this.size; i++) {
      const connection = this.connections[i]
      if (noAliveConnections || connection.status === Connection.statuses.ALIVE) {
        if (filter(connection) === true) {
          connections.push(connection)
        }
      }
    }

    if (connections.length === 0) return null

    return selector(connections)
  }

  /**
   * Empties the connection pool.
   *
   * @returns {ConnectionPool}
   */
  empty (callback) {
    super.empty(() => {
      this.dead = []
      callback()
    })
  }

  /**
   * Update the ConnectionPool with new connections.
   *
   * @param {array} array of connections
   * @returns {ConnectionPool}
   */
  update (connections) {
    super.update(connections)
    this.dead = []
    return this
  }
}

ConnectionPool.resurrectStrategies = {
  none: 0,
  ping: 1,
  optimistic: 2
}

module.exports = ConnectionPool


/***/ }),

/***/ 8167:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const BaseConnectionPool = __webpack_require__(6474)
const ConnectionPool = __webpack_require__(6279)
const CloudConnectionPool = __webpack_require__(5521)

module.exports = {
  BaseConnectionPool,
  ConnectionPool,
  CloudConnectionPool
}


/***/ }),

/***/ 1585:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 6605:
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(6540)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 6540:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(1585);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => enableOverride === null ? createDebug.enabled(namespace) : enableOverride,
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 9558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __webpack_require__(6605);
} else {
	module.exports = __webpack_require__(3264);
}


/***/ }),

/***/ 3264:
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

const tty = __webpack_require__(3867);
const util = __webpack_require__(1669);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __webpack_require__(8354);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __webpack_require__(6540)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 9925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CsvFormatterStream = void 0;
const stream_1 = __webpack_require__(2413);
const formatter_1 = __webpack_require__(6661);
class CsvFormatterStream extends stream_1.Transform {
    constructor(formatterOptions) {
        super({ writableObjectMode: formatterOptions.objectMode });
        this.hasWrittenBOM = false;
        this.formatterOptions = formatterOptions;
        this.rowFormatter = new formatter_1.RowFormatter(formatterOptions);
        // if writeBOM is false then set to true
        // if writeBOM is true then set to false by default so it is written out
        this.hasWrittenBOM = !formatterOptions.writeBOM;
    }
    transform(transformFunction) {
        this.rowFormatter.rowTransform = transformFunction;
        return this;
    }
    _transform(row, encoding, cb) {
        let cbCalled = false;
        try {
            if (!this.hasWrittenBOM) {
                this.push(this.formatterOptions.BOM);
                this.hasWrittenBOM = true;
            }
            this.rowFormatter.format(row, (err, rows) => {
                if (err) {
                    cbCalled = true;
                    return cb(err);
                }
                if (rows) {
                    rows.forEach((r) => {
                        this.push(Buffer.from(r, 'utf8'));
                    });
                }
                cbCalled = true;
                return cb();
            });
        }
        catch (e) {
            if (cbCalled) {
                throw e;
            }
            cb(e);
        }
    }
    _flush(cb) {
        this.rowFormatter.finish((err, rows) => {
            if (err) {
                return cb(err);
            }
            if (rows) {
                rows.forEach((r) => {
                    this.push(Buffer.from(r, 'utf8'));
                });
            }
            return cb();
        });
    }
}
exports.CsvFormatterStream = CsvFormatterStream;
//# sourceMappingURL=CsvFormatterStream.js.map

/***/ }),

/***/ 8856:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormatterOptions = void 0;
class FormatterOptions {
    constructor(opts = {}) {
        var _a;
        this.objectMode = true;
        this.delimiter = ',';
        this.rowDelimiter = '\n';
        this.quote = '"';
        this.escape = this.quote;
        this.quoteColumns = false;
        this.quoteHeaders = this.quoteColumns;
        this.headers = null;
        this.includeEndRowDelimiter = false;
        this.writeBOM = false;
        this.BOM = '\ufeff';
        this.alwaysWriteHeaders = false;
        Object.assign(this, opts || {});
        if (typeof (opts === null || opts === void 0 ? void 0 : opts.quoteHeaders) === 'undefined') {
            this.quoteHeaders = this.quoteColumns;
        }
        if ((opts === null || opts === void 0 ? void 0 : opts.quote) === true) {
            this.quote = '"';
        }
        else if ((opts === null || opts === void 0 ? void 0 : opts.quote) === false) {
            this.quote = '';
        }
        if (typeof (opts === null || opts === void 0 ? void 0 : opts.escape) !== 'string') {
            this.escape = this.quote;
        }
        this.shouldWriteHeaders = !!this.headers && ((_a = opts.writeHeaders) !== null && _a !== void 0 ? _a : true);
        this.headers = Array.isArray(this.headers) ? this.headers : null;
        this.escapedQuote = `${this.escape}${this.quote}`;
    }
}
exports.FormatterOptions = FormatterOptions;
//# sourceMappingURL=FormatterOptions.js.map

/***/ }),

/***/ 1687:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FieldFormatter = void 0;
const lodash_isboolean_1 = __importDefault(__webpack_require__(9153));
const lodash_isnil_1 = __importDefault(__webpack_require__(6042));
const lodash_escaperegexp_1 = __importDefault(__webpack_require__(3054));
class FieldFormatter {
    constructor(formatterOptions) {
        this._headers = null;
        this.formatterOptions = formatterOptions;
        if (formatterOptions.headers !== null) {
            this.headers = formatterOptions.headers;
        }
        this.REPLACE_REGEXP = new RegExp(formatterOptions.quote, 'g');
        const escapePattern = `[${formatterOptions.delimiter}${lodash_escaperegexp_1.default(formatterOptions.rowDelimiter)}|\r|\n]`;
        this.ESCAPE_REGEXP = new RegExp(escapePattern);
    }
    set headers(headers) {
        this._headers = headers;
    }
    shouldQuote(fieldIndex, isHeader) {
        const quoteConfig = isHeader ? this.formatterOptions.quoteHeaders : this.formatterOptions.quoteColumns;
        if (lodash_isboolean_1.default(quoteConfig)) {
            return quoteConfig;
        }
        if (Array.isArray(quoteConfig)) {
            return quoteConfig[fieldIndex];
        }
        if (this._headers !== null) {
            return quoteConfig[this._headers[fieldIndex]];
        }
        return false;
    }
    format(field, fieldIndex, isHeader) {
        const preparedField = `${lodash_isnil_1.default(field) ? '' : field}`.replace(/\0/g, '');
        const { formatterOptions } = this;
        if (formatterOptions.quote !== '') {
            const shouldEscape = preparedField.indexOf(formatterOptions.quote) !== -1;
            if (shouldEscape) {
                return this.quoteField(preparedField.replace(this.REPLACE_REGEXP, formatterOptions.escapedQuote));
            }
        }
        const hasEscapeCharacters = preparedField.search(this.ESCAPE_REGEXP) !== -1;
        if (hasEscapeCharacters || this.shouldQuote(fieldIndex, isHeader)) {
            return this.quoteField(preparedField);
        }
        return preparedField;
    }
    quoteField(field) {
        const { quote } = this.formatterOptions;
        return `${quote}${field}${quote}`;
    }
}
exports.FieldFormatter = FieldFormatter;
//# sourceMappingURL=FieldFormatter.js.map

/***/ }),

/***/ 118:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RowFormatter = void 0;
const lodash_isfunction_1 = __importDefault(__webpack_require__(1130));
const lodash_isequal_1 = __importDefault(__webpack_require__(9290));
const FieldFormatter_1 = __webpack_require__(1687);
const types_1 = __webpack_require__(700);
class RowFormatter {
    constructor(formatterOptions) {
        this.rowCount = 0;
        this.formatterOptions = formatterOptions;
        this.fieldFormatter = new FieldFormatter_1.FieldFormatter(formatterOptions);
        this.headers = formatterOptions.headers;
        this.shouldWriteHeaders = formatterOptions.shouldWriteHeaders;
        this.hasWrittenHeaders = false;
        if (this.headers !== null) {
            this.fieldFormatter.headers = this.headers;
        }
        if (formatterOptions.transform) {
            this.rowTransform = formatterOptions.transform;
        }
    }
    static isRowHashArray(row) {
        if (Array.isArray(row)) {
            return Array.isArray(row[0]) && row[0].length === 2;
        }
        return false;
    }
    static isRowArray(row) {
        return Array.isArray(row) && !this.isRowHashArray(row);
    }
    // get headers from a row item
    static gatherHeaders(row) {
        if (RowFormatter.isRowHashArray(row)) {
            // lets assume a multi-dimesional array with item 0 being the header
            return row.map((it) => it[0]);
        }
        if (Array.isArray(row)) {
            return row;
        }
        return Object.keys(row);
    }
    // eslint-disable-next-line @typescript-eslint/no-shadow
    static createTransform(transformFunction) {
        if (types_1.isSyncTransform(transformFunction)) {
            return (row, cb) => {
                let transformedRow = null;
                try {
                    transformedRow = transformFunction(row);
                }
                catch (e) {
                    return cb(e);
                }
                return cb(null, transformedRow);
            };
        }
        return (row, cb) => {
            transformFunction(row, cb);
        };
    }
    set rowTransform(transformFunction) {
        if (!lodash_isfunction_1.default(transformFunction)) {
            throw new TypeError('The transform should be a function');
        }
        this._rowTransform = RowFormatter.createTransform(transformFunction);
    }
    format(row, cb) {
        this.callTransformer(row, (err, transformedRow) => {
            if (err) {
                return cb(err);
            }
            if (!row) {
                return cb(null);
            }
            const rows = [];
            if (transformedRow) {
                const { shouldFormatColumns, headers } = this.checkHeaders(transformedRow);
                if (this.shouldWriteHeaders && headers && !this.hasWrittenHeaders) {
                    rows.push(this.formatColumns(headers, true));
                    this.hasWrittenHeaders = true;
                }
                if (shouldFormatColumns) {
                    const columns = this.gatherColumns(transformedRow);
                    rows.push(this.formatColumns(columns, false));
                }
            }
            return cb(null, rows);
        });
    }
    finish(cb) {
        const rows = [];
        // check if we should write headers and we didnt get any rows
        if (this.formatterOptions.alwaysWriteHeaders && this.rowCount === 0) {
            if (!this.headers) {
                return cb(new Error('`alwaysWriteHeaders` option is set to true but `headers` option not provided.'));
            }
            rows.push(this.formatColumns(this.headers, true));
        }
        if (this.formatterOptions.includeEndRowDelimiter) {
            rows.push(this.formatterOptions.rowDelimiter);
        }
        return cb(null, rows);
    }
    // check if we need to write header return true if we should also write a row
    // could be false if headers is true and the header row(first item) is passed in
    checkHeaders(row) {
        if (this.headers) {
            // either the headers were provided by the user or we have already gathered them.
            return { shouldFormatColumns: true, headers: this.headers };
        }
        const headers = RowFormatter.gatherHeaders(row);
        this.headers = headers;
        this.fieldFormatter.headers = headers;
        if (!this.shouldWriteHeaders) {
            // if we are not supposed to write the headers then
            // always format the columns
            return { shouldFormatColumns: true, headers: null };
        }
        // if the row is equal to headers dont format
        return { shouldFormatColumns: !lodash_isequal_1.default(headers, row), headers };
    }
    // todo change this method to unknown[]
    gatherColumns(row) {
        if (this.headers === null) {
            throw new Error('Headers is currently null');
        }
        if (!Array.isArray(row)) {
            return this.headers.map((header) => row[header]);
        }
        if (RowFormatter.isRowHashArray(row)) {
            return this.headers.map((header, i) => {
                const col = row[i];
                if (col) {
                    return col[1];
                }
                return '';
            });
        }
        // if its a one dimensional array and headers were not provided
        // then just return the row
        if (RowFormatter.isRowArray(row) && !this.shouldWriteHeaders) {
            return row;
        }
        return this.headers.map((header, i) => row[i]);
    }
    callTransformer(row, cb) {
        if (!this._rowTransform) {
            return cb(null, row);
        }
        return this._rowTransform(row, cb);
    }
    formatColumns(columns, isHeadersRow) {
        const formattedCols = columns
            .map((field, i) => this.fieldFormatter.format(field, i, isHeadersRow))
            .join(this.formatterOptions.delimiter);
        const { rowCount } = this;
        this.rowCount += 1;
        if (rowCount) {
            return [this.formatterOptions.rowDelimiter, formattedCols].join('');
        }
        return formattedCols;
    }
}
exports.RowFormatter = RowFormatter;
//# sourceMappingURL=RowFormatter.js.map

/***/ }),

/***/ 6661:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FieldFormatter = exports.RowFormatter = void 0;
var RowFormatter_1 = __webpack_require__(118);
Object.defineProperty(exports, "RowFormatter", ({ enumerable: true, get: function () { return RowFormatter_1.RowFormatter; } }));
var FieldFormatter_1 = __webpack_require__(1687);
Object.defineProperty(exports, "FieldFormatter", ({ enumerable: true, get: function () { return FieldFormatter_1.FieldFormatter; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2441:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeToPath = exports.writeToString = exports.writeToBuffer = exports.writeToStream = exports.write = exports.format = exports.FormatterOptions = exports.CsvFormatterStream = void 0;
const util_1 = __webpack_require__(1669);
const stream_1 = __webpack_require__(2413);
const fs = __importStar(__webpack_require__(5747));
const FormatterOptions_1 = __webpack_require__(8856);
const CsvFormatterStream_1 = __webpack_require__(9925);
__exportStar(__webpack_require__(700), exports);
var CsvFormatterStream_2 = __webpack_require__(9925);
Object.defineProperty(exports, "CsvFormatterStream", ({ enumerable: true, get: function () { return CsvFormatterStream_2.CsvFormatterStream; } }));
var FormatterOptions_2 = __webpack_require__(8856);
Object.defineProperty(exports, "FormatterOptions", ({ enumerable: true, get: function () { return FormatterOptions_2.FormatterOptions; } }));
exports.format = (options) => new CsvFormatterStream_1.CsvFormatterStream(new FormatterOptions_1.FormatterOptions(options));
exports.write = (rows, options) => {
    const csvStream = exports.format(options);
    const promiseWrite = util_1.promisify((row, cb) => {
        csvStream.write(row, undefined, cb);
    });
    rows.reduce((prev, row) => prev.then(() => promiseWrite(row)), Promise.resolve())
        .then(() => csvStream.end())
        .catch((err) => {
        csvStream.emit('error', err);
    });
    return csvStream;
};
exports.writeToStream = (ws, rows, options) => exports.write(rows, options).pipe(ws);
exports.writeToBuffer = (rows, opts = {}) => {
    const buffers = [];
    const ws = new stream_1.Writable({
        write(data, enc, writeCb) {
            buffers.push(data);
            writeCb();
        },
    });
    return new Promise((res, rej) => {
        ws.on('error', rej).on('finish', () => res(Buffer.concat(buffers)));
        exports.write(rows, opts).pipe(ws);
    });
};
exports.writeToString = (rows, options) => exports.writeToBuffer(rows, options).then((buffer) => buffer.toString());
exports.writeToPath = (path, rows, options) => {
    const stream = fs.createWriteStream(path, { encoding: 'utf8' });
    return exports.write(rows, options).pipe(stream);
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 700:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSyncTransform = void 0;
exports.isSyncTransform = (transform) => transform.length === 1;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 1639:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CsvParserStream = void 0;
const string_decoder_1 = __webpack_require__(4304);
const stream_1 = __webpack_require__(2413);
const transforms_1 = __webpack_require__(845);
const parser_1 = __webpack_require__(2875);
class CsvParserStream extends stream_1.Transform {
    constructor(parserOptions) {
        super({ objectMode: parserOptions.objectMode });
        this.lines = '';
        this.rowCount = 0;
        this.parsedRowCount = 0;
        this.parsedLineCount = 0;
        this.endEmitted = false;
        this.headersEmitted = false;
        this.parserOptions = parserOptions;
        this.parser = new parser_1.Parser(parserOptions);
        this.headerTransformer = new transforms_1.HeaderTransformer(parserOptions);
        this.decoder = new string_decoder_1.StringDecoder(parserOptions.encoding);
        this.rowTransformerValidator = new transforms_1.RowTransformerValidator();
    }
    get hasHitRowLimit() {
        return this.parserOptions.limitRows && this.rowCount >= this.parserOptions.maxRows;
    }
    get shouldEmitRows() {
        return this.parsedRowCount > this.parserOptions.skipRows;
    }
    get shouldSkipLine() {
        return this.parsedLineCount <= this.parserOptions.skipLines;
    }
    transform(transformFunction) {
        this.rowTransformerValidator.rowTransform = transformFunction;
        return this;
    }
    validate(validateFunction) {
        this.rowTransformerValidator.rowValidator = validateFunction;
        return this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    emit(event, ...rest) {
        if (event === 'end') {
            if (!this.endEmitted) {
                this.endEmitted = true;
                super.emit('end', this.rowCount);
            }
            return false;
        }
        return super.emit(event, ...rest);
    }
    _transform(data, encoding, done) {
        // if we have hit our maxRows parsing limit then skip parsing
        if (this.hasHitRowLimit) {
            return done();
        }
        const wrappedCallback = CsvParserStream.wrapDoneCallback(done);
        try {
            const { lines } = this;
            const newLine = lines + this.decoder.write(data);
            const rows = this.parse(newLine, true);
            return this.processRows(rows, wrappedCallback);
        }
        catch (e) {
            return wrappedCallback(e);
        }
    }
    _flush(done) {
        const wrappedCallback = CsvParserStream.wrapDoneCallback(done);
        // if we have hit our maxRows parsing limit then skip parsing
        if (this.hasHitRowLimit) {
            return wrappedCallback();
        }
        try {
            const newLine = this.lines + this.decoder.end();
            const rows = this.parse(newLine, false);
            return this.processRows(rows, wrappedCallback);
        }
        catch (e) {
            return wrappedCallback(e);
        }
    }
    parse(data, hasMoreData) {
        if (!data) {
            return [];
        }
        const { line, rows } = this.parser.parse(data, hasMoreData);
        this.lines = line;
        return rows;
    }
    processRows(rows, cb) {
        const rowsLength = rows.length;
        const iterate = (i) => {
            const callNext = (err) => {
                if (err) {
                    return cb(err);
                }
                if (i % 100 === 0) {
                    // incase the transform are sync insert a next tick to prevent stack overflow
                    setImmediate(() => iterate(i + 1));
                    return undefined;
                }
                return iterate(i + 1);
            };
            this.checkAndEmitHeaders();
            // if we have emitted all rows or we have hit the maxRows limit option
            // then end
            if (i >= rowsLength || this.hasHitRowLimit) {
                return cb();
            }
            this.parsedLineCount += 1;
            if (this.shouldSkipLine) {
                return callNext();
            }
            const row = rows[i];
            this.rowCount += 1;
            this.parsedRowCount += 1;
            const nextRowCount = this.rowCount;
            return this.transformRow(row, (err, transformResult) => {
                if (err) {
                    this.rowCount -= 1;
                    return callNext(err);
                }
                if (!transformResult) {
                    return callNext(new Error('expected transform result'));
                }
                if (!transformResult.isValid) {
                    this.emit('data-invalid', transformResult.row, nextRowCount, transformResult.reason);
                }
                else if (transformResult.row) {
                    return this.pushRow(transformResult.row, callNext);
                }
                return callNext();
            });
        };
        iterate(0);
    }
    transformRow(parsedRow, cb) {
        try {
            this.headerTransformer.transform(parsedRow, (err, withHeaders) => {
                if (err) {
                    return cb(err);
                }
                if (!withHeaders) {
                    return cb(new Error('Expected result from header transform'));
                }
                if (!withHeaders.isValid) {
                    if (this.shouldEmitRows) {
                        return cb(null, { isValid: false, row: parsedRow });
                    }
                    // skipped because of skipRows option remove from total row count
                    return this.skipRow(cb);
                }
                if (withHeaders.row) {
                    if (this.shouldEmitRows) {
                        return this.rowTransformerValidator.transformAndValidate(withHeaders.row, cb);
                    }
                    // skipped because of skipRows option remove from total row count
                    return this.skipRow(cb);
                }
                // this is a header row dont include in the rowCount or parsedRowCount
                this.rowCount -= 1;
                this.parsedRowCount -= 1;
                return cb(null, { row: null, isValid: true });
            });
        }
        catch (e) {
            cb(e);
        }
    }
    checkAndEmitHeaders() {
        if (!this.headersEmitted && this.headerTransformer.headers) {
            this.headersEmitted = true;
            this.emit('headers', this.headerTransformer.headers);
        }
    }
    skipRow(cb) {
        // skipped because of skipRows option remove from total row count
        this.rowCount -= 1;
        return cb(null, { row: null, isValid: true });
    }
    pushRow(row, cb) {
        try {
            if (!this.parserOptions.objectMode) {
                this.push(JSON.stringify(row));
            }
            else {
                this.push(row);
            }
            cb();
        }
        catch (e) {
            cb(e);
        }
    }
    static wrapDoneCallback(done) {
        let errorCalled = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (err, ...args) => {
            if (err) {
                if (errorCalled) {
                    throw err;
                }
                errorCalled = true;
                done(err);
                return;
            }
            done(...args);
        };
    }
}
exports.CsvParserStream = CsvParserStream;
//# sourceMappingURL=CsvParserStream.js.map

/***/ }),

/***/ 5078:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParserOptions = void 0;
const lodash_escaperegexp_1 = __importDefault(__webpack_require__(3054));
const lodash_isnil_1 = __importDefault(__webpack_require__(6042));
class ParserOptions {
    constructor(opts) {
        var _a;
        this.objectMode = true;
        this.delimiter = ',';
        this.ignoreEmpty = false;
        this.quote = '"';
        this.escape = null;
        this.escapeChar = this.quote;
        this.comment = null;
        this.supportsComments = false;
        this.ltrim = false;
        this.rtrim = false;
        this.trim = false;
        this.headers = null;
        this.renameHeaders = false;
        this.strictColumnHandling = false;
        this.discardUnmappedColumns = false;
        this.carriageReturn = '\r';
        this.encoding = 'utf8';
        this.limitRows = false;
        this.maxRows = 0;
        this.skipLines = 0;
        this.skipRows = 0;
        Object.assign(this, opts || {});
        if (this.delimiter.length > 1) {
            throw new Error('delimiter option must be one character long');
        }
        this.escapedDelimiter = lodash_escaperegexp_1.default(this.delimiter);
        this.escapeChar = (_a = this.escape) !== null && _a !== void 0 ? _a : this.quote;
        this.supportsComments = !lodash_isnil_1.default(this.comment);
        this.NEXT_TOKEN_REGEXP = new RegExp(`([^\\s]|\\r\\n|\\n|\\r|${this.escapedDelimiter})`);
        if (this.maxRows > 0) {
            this.limitRows = true;
        }
    }
}
exports.ParserOptions = ParserOptions;
//# sourceMappingURL=ParserOptions.js.map

/***/ }),

/***/ 6991:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseString = exports.parseFile = exports.parseStream = exports.parse = exports.ParserOptions = exports.CsvParserStream = void 0;
const fs = __importStar(__webpack_require__(5747));
const stream_1 = __webpack_require__(2413);
const ParserOptions_1 = __webpack_require__(5078);
const CsvParserStream_1 = __webpack_require__(1639);
__exportStar(__webpack_require__(1005), exports);
var CsvParserStream_2 = __webpack_require__(1639);
Object.defineProperty(exports, "CsvParserStream", ({ enumerable: true, get: function () { return CsvParserStream_2.CsvParserStream; } }));
var ParserOptions_2 = __webpack_require__(5078);
Object.defineProperty(exports, "ParserOptions", ({ enumerable: true, get: function () { return ParserOptions_2.ParserOptions; } }));
exports.parse = (args) => new CsvParserStream_1.CsvParserStream(new ParserOptions_1.ParserOptions(args));
exports.parseStream = (stream, options) => stream.pipe(new CsvParserStream_1.CsvParserStream(new ParserOptions_1.ParserOptions(options)));
exports.parseFile = (location, options = {}) => fs.createReadStream(location).pipe(new CsvParserStream_1.CsvParserStream(new ParserOptions_1.ParserOptions(options)));
exports.parseString = (string, options) => {
    const rs = new stream_1.Readable();
    rs.push(string);
    rs.push(null);
    return rs.pipe(new CsvParserStream_1.CsvParserStream(new ParserOptions_1.ParserOptions(options)));
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6593:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Parser = void 0;
const Scanner_1 = __webpack_require__(6679);
const RowParser_1 = __webpack_require__(5672);
const Token_1 = __webpack_require__(1248);
class Parser {
    constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.rowParser = new RowParser_1.RowParser(this.parserOptions);
    }
    static removeBOM(line) {
        // Catches EFBBBF (UTF-8 BOM) because the buffer-to-string
        // conversion translates it to FEFF (UTF-16 BOM)
        if (line && line.charCodeAt(0) === 0xfeff) {
            return line.slice(1);
        }
        return line;
    }
    parse(line, hasMoreData) {
        const scanner = new Scanner_1.Scanner({
            line: Parser.removeBOM(line),
            parserOptions: this.parserOptions,
            hasMoreData,
        });
        if (this.parserOptions.supportsComments) {
            return this.parseWithComments(scanner);
        }
        return this.parseWithoutComments(scanner);
    }
    parseWithoutComments(scanner) {
        const rows = [];
        let shouldContinue = true;
        while (shouldContinue) {
            shouldContinue = this.parseRow(scanner, rows);
        }
        return { line: scanner.line, rows };
    }
    parseWithComments(scanner) {
        const { parserOptions } = this;
        const rows = [];
        for (let nextToken = scanner.nextCharacterToken; nextToken !== null; nextToken = scanner.nextCharacterToken) {
            if (Token_1.Token.isTokenComment(nextToken, parserOptions)) {
                const cursor = scanner.advancePastLine();
                if (cursor === null) {
                    return { line: scanner.lineFromCursor, rows };
                }
                if (!scanner.hasMoreCharacters) {
                    return { line: scanner.lineFromCursor, rows };
                }
                scanner.truncateToCursor();
            }
            else if (!this.parseRow(scanner, rows)) {
                break;
            }
        }
        return { line: scanner.line, rows };
    }
    parseRow(scanner, rows) {
        const nextToken = scanner.nextNonSpaceToken;
        if (!nextToken) {
            return false;
        }
        const row = this.rowParser.parse(scanner);
        if (row === null) {
            return false;
        }
        if (this.parserOptions.ignoreEmpty && RowParser_1.RowParser.isEmptyRow(row)) {
            return true;
        }
        rows.push(row);
        return true;
    }
}
exports.Parser = Parser;
//# sourceMappingURL=Parser.js.map

/***/ }),

/***/ 5672:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RowParser = void 0;
const column_1 = __webpack_require__(4077);
const Token_1 = __webpack_require__(1248);
const EMPTY_STRING = '';
class RowParser {
    constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.columnParser = new column_1.ColumnParser(parserOptions);
    }
    static isEmptyRow(row) {
        return row.join(EMPTY_STRING).replace(/\s+/g, EMPTY_STRING) === EMPTY_STRING;
    }
    parse(scanner) {
        const { parserOptions } = this;
        const { hasMoreData } = scanner;
        const currentScanner = scanner;
        const columns = [];
        let currentToken = this.getStartToken(currentScanner, columns);
        while (currentToken) {
            if (Token_1.Token.isTokenRowDelimiter(currentToken)) {
                currentScanner.advancePastToken(currentToken);
                // if ends with CR and there is more data, keep unparsed due to possible
                // coming LF in CRLF
                if (!currentScanner.hasMoreCharacters &&
                    Token_1.Token.isTokenCarriageReturn(currentToken, parserOptions) &&
                    hasMoreData) {
                    return null;
                }
                currentScanner.truncateToCursor();
                return columns;
            }
            if (!this.shouldSkipColumnParse(currentScanner, currentToken, columns)) {
                const item = this.columnParser.parse(currentScanner);
                if (item === null) {
                    return null;
                }
                columns.push(item);
            }
            currentToken = currentScanner.nextNonSpaceToken;
        }
        if (!hasMoreData) {
            currentScanner.truncateToCursor();
            return columns;
        }
        return null;
    }
    getStartToken(scanner, columns) {
        const currentToken = scanner.nextNonSpaceToken;
        if (currentToken !== null && Token_1.Token.isTokenDelimiter(currentToken, this.parserOptions)) {
            columns.push('');
            return scanner.nextNonSpaceToken;
        }
        return currentToken;
    }
    shouldSkipColumnParse(scanner, currentToken, columns) {
        const { parserOptions } = this;
        if (Token_1.Token.isTokenDelimiter(currentToken, parserOptions)) {
            scanner.advancePastToken(currentToken);
            // if the delimiter is at the end of a line
            const nextToken = scanner.nextCharacterToken;
            if (!scanner.hasMoreCharacters || (nextToken !== null && Token_1.Token.isTokenRowDelimiter(nextToken))) {
                columns.push('');
                return true;
            }
            if (nextToken !== null && Token_1.Token.isTokenDelimiter(nextToken, parserOptions)) {
                columns.push('');
                return true;
            }
        }
        return false;
    }
}
exports.RowParser = RowParser;
//# sourceMappingURL=RowParser.js.map

/***/ }),

/***/ 6679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scanner = void 0;
const Token_1 = __webpack_require__(1248);
const ROW_DELIMITER = /((?:\r\n)|\n|\r)/;
class Scanner {
    constructor(args) {
        this.cursor = 0;
        this.line = args.line;
        this.lineLength = this.line.length;
        this.parserOptions = args.parserOptions;
        this.hasMoreData = args.hasMoreData;
        this.cursor = args.cursor || 0;
    }
    get hasMoreCharacters() {
        return this.lineLength > this.cursor;
    }
    get nextNonSpaceToken() {
        const { lineFromCursor } = this;
        const regex = this.parserOptions.NEXT_TOKEN_REGEXP;
        if (lineFromCursor.search(regex) === -1) {
            return null;
        }
        const match = regex.exec(lineFromCursor);
        if (match == null) {
            return null;
        }
        const token = match[1];
        const startCursor = this.cursor + (match.index || 0);
        return new Token_1.Token({
            token,
            startCursor,
            endCursor: startCursor + token.length - 1,
        });
    }
    get nextCharacterToken() {
        const { cursor, lineLength } = this;
        if (lineLength <= cursor) {
            return null;
        }
        return new Token_1.Token({
            token: this.line[cursor],
            startCursor: cursor,
            endCursor: cursor,
        });
    }
    get lineFromCursor() {
        return this.line.substr(this.cursor);
    }
    advancePastLine() {
        const match = ROW_DELIMITER.exec(this.lineFromCursor);
        if (!match) {
            if (this.hasMoreData) {
                return null;
            }
            this.cursor = this.lineLength;
            return this;
        }
        this.cursor += (match.index || 0) + match[0].length;
        return this;
    }
    advanceTo(cursor) {
        this.cursor = cursor;
        return this;
    }
    advanceToToken(token) {
        this.cursor = token.startCursor;
        return this;
    }
    advancePastToken(token) {
        this.cursor = token.endCursor + 1;
        return this;
    }
    truncateToCursor() {
        this.line = this.lineFromCursor;
        this.lineLength = this.line.length;
        this.cursor = 0;
        return this;
    }
}
exports.Scanner = Scanner;
//# sourceMappingURL=Scanner.js.map

/***/ }),

/***/ 1248:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Token = void 0;
class Token {
    constructor(tokenArgs) {
        this.token = tokenArgs.token;
        this.startCursor = tokenArgs.startCursor;
        this.endCursor = tokenArgs.endCursor;
    }
    static isTokenRowDelimiter(token) {
        const content = token.token;
        return content === '\r' || content === '\n' || content === '\r\n';
    }
    static isTokenCarriageReturn(token, parserOptions) {
        return token.token === parserOptions.carriageReturn;
    }
    static isTokenComment(token, parserOptions) {
        return parserOptions.supportsComments && !!token && token.token === parserOptions.comment;
    }
    static isTokenEscapeCharacter(token, parserOptions) {
        return token.token === parserOptions.escapeChar;
    }
    static isTokenQuote(token, parserOptions) {
        return token.token === parserOptions.quote;
    }
    static isTokenDelimiter(token, parserOptions) {
        return token.token === parserOptions.delimiter;
    }
}
exports.Token = Token;
//# sourceMappingURL=Token.js.map

/***/ }),

/***/ 7148:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColumnFormatter = void 0;
class ColumnFormatter {
    constructor(parserOptions) {
        if (parserOptions.trim) {
            this.format = (col) => col.trim();
        }
        else if (parserOptions.ltrim) {
            this.format = (col) => col.trimLeft();
        }
        else if (parserOptions.rtrim) {
            this.format = (col) => col.trimRight();
        }
        else {
            this.format = (col) => col;
        }
    }
}
exports.ColumnFormatter = ColumnFormatter;
//# sourceMappingURL=ColumnFormatter.js.map

/***/ }),

/***/ 4733:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColumnParser = void 0;
const NonQuotedColumnParser_1 = __webpack_require__(7781);
const QuotedColumnParser_1 = __webpack_require__(7147);
const Token_1 = __webpack_require__(1248);
class ColumnParser {
    constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.quotedColumnParser = new QuotedColumnParser_1.QuotedColumnParser(parserOptions);
        this.nonQuotedColumnParser = new NonQuotedColumnParser_1.NonQuotedColumnParser(parserOptions);
    }
    parse(scanner) {
        const { nextNonSpaceToken } = scanner;
        if (nextNonSpaceToken !== null && Token_1.Token.isTokenQuote(nextNonSpaceToken, this.parserOptions)) {
            scanner.advanceToToken(nextNonSpaceToken);
            return this.quotedColumnParser.parse(scanner);
        }
        return this.nonQuotedColumnParser.parse(scanner);
    }
}
exports.ColumnParser = ColumnParser;
//# sourceMappingURL=ColumnParser.js.map

/***/ }),

/***/ 7781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NonQuotedColumnParser = void 0;
const ColumnFormatter_1 = __webpack_require__(7148);
const Token_1 = __webpack_require__(1248);
class NonQuotedColumnParser {
    constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.columnFormatter = new ColumnFormatter_1.ColumnFormatter(parserOptions);
    }
    parse(scanner) {
        if (!scanner.hasMoreCharacters) {
            return null;
        }
        const { parserOptions } = this;
        const characters = [];
        let nextToken = scanner.nextCharacterToken;
        for (; nextToken; nextToken = scanner.nextCharacterToken) {
            if (Token_1.Token.isTokenDelimiter(nextToken, parserOptions) || Token_1.Token.isTokenRowDelimiter(nextToken)) {
                break;
            }
            characters.push(nextToken.token);
            scanner.advancePastToken(nextToken);
        }
        return this.columnFormatter.format(characters.join(''));
    }
}
exports.NonQuotedColumnParser = NonQuotedColumnParser;
//# sourceMappingURL=NonQuotedColumnParser.js.map

/***/ }),

/***/ 7147:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuotedColumnParser = void 0;
const ColumnFormatter_1 = __webpack_require__(7148);
const Token_1 = __webpack_require__(1248);
class QuotedColumnParser {
    constructor(parserOptions) {
        this.parserOptions = parserOptions;
        this.columnFormatter = new ColumnFormatter_1.ColumnFormatter(parserOptions);
    }
    parse(scanner) {
        if (!scanner.hasMoreCharacters) {
            return null;
        }
        const originalCursor = scanner.cursor;
        const { foundClosingQuote, col } = this.gatherDataBetweenQuotes(scanner);
        if (!foundClosingQuote) {
            // reset the cursor to the original
            scanner.advanceTo(originalCursor);
            // if we didnt find a closing quote but we potentially have more data then skip the parsing
            // and return the original scanner.
            if (!scanner.hasMoreData) {
                throw new Error(`Parse Error: missing closing: '${this.parserOptions.quote || ''}' in line: at '${scanner.lineFromCursor.replace(/[\r\n]/g, "\\n'")}'`);
            }
            return null;
        }
        this.checkForMalformedColumn(scanner);
        return col;
    }
    gatherDataBetweenQuotes(scanner) {
        const { parserOptions } = this;
        let foundStartingQuote = false;
        let foundClosingQuote = false;
        const characters = [];
        let nextToken = scanner.nextCharacterToken;
        for (; !foundClosingQuote && nextToken !== null; nextToken = scanner.nextCharacterToken) {
            const isQuote = Token_1.Token.isTokenQuote(nextToken, parserOptions);
            // ignore first quote
            if (!foundStartingQuote && isQuote) {
                foundStartingQuote = true;
            }
            else if (foundStartingQuote) {
                if (Token_1.Token.isTokenEscapeCharacter(nextToken, parserOptions)) {
                    // advance past the escape character so we can get the next one in line
                    scanner.advancePastToken(nextToken);
                    const tokenFollowingEscape = scanner.nextCharacterToken;
                    // if the character following the escape is a quote character then just add
                    // the quote and advance to that character
                    if (tokenFollowingEscape !== null &&
                        (Token_1.Token.isTokenQuote(tokenFollowingEscape, parserOptions) ||
                            Token_1.Token.isTokenEscapeCharacter(tokenFollowingEscape, parserOptions))) {
                        characters.push(tokenFollowingEscape.token);
                        nextToken = tokenFollowingEscape;
                    }
                    else if (isQuote) {
                        // if the escape is also a quote then we found our closing quote and finish early
                        foundClosingQuote = true;
                    }
                    else {
                        // other wise add the escape token to the characters since it wast escaping anything
                        characters.push(nextToken.token);
                    }
                }
                else if (isQuote) {
                    // we found our closing quote!
                    foundClosingQuote = true;
                }
                else {
                    // add the token to the characters
                    characters.push(nextToken.token);
                }
            }
            scanner.advancePastToken(nextToken);
        }
        return { col: this.columnFormatter.format(characters.join('')), foundClosingQuote };
    }
    checkForMalformedColumn(scanner) {
        const { parserOptions } = this;
        const { nextNonSpaceToken } = scanner;
        if (nextNonSpaceToken) {
            const isNextTokenADelimiter = Token_1.Token.isTokenDelimiter(nextNonSpaceToken, parserOptions);
            const isNextTokenARowDelimiter = Token_1.Token.isTokenRowDelimiter(nextNonSpaceToken);
            if (!(isNextTokenADelimiter || isNextTokenARowDelimiter)) {
                // if the final quote was NOT followed by a column (,) or row(\n) delimiter then its a bad column
                // tldr: only part of the column was quoted
                const linePreview = scanner.lineFromCursor.substr(0, 10).replace(/[\r\n]/g, "\\n'");
                throw new Error(`Parse Error: expected: '${parserOptions.escapedDelimiter}' OR new line got: '${nextNonSpaceToken.token}'. at '${linePreview}`);
            }
            scanner.advanceToToken(nextNonSpaceToken);
        }
        else if (!scanner.hasMoreData) {
            scanner.advancePastLine();
        }
    }
}
exports.QuotedColumnParser = QuotedColumnParser;
//# sourceMappingURL=QuotedColumnParser.js.map

/***/ }),

/***/ 4077:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColumnFormatter = exports.QuotedColumnParser = exports.NonQuotedColumnParser = exports.ColumnParser = void 0;
var ColumnParser_1 = __webpack_require__(4733);
Object.defineProperty(exports, "ColumnParser", ({ enumerable: true, get: function () { return ColumnParser_1.ColumnParser; } }));
var NonQuotedColumnParser_1 = __webpack_require__(7781);
Object.defineProperty(exports, "NonQuotedColumnParser", ({ enumerable: true, get: function () { return NonQuotedColumnParser_1.NonQuotedColumnParser; } }));
var QuotedColumnParser_1 = __webpack_require__(7147);
Object.defineProperty(exports, "QuotedColumnParser", ({ enumerable: true, get: function () { return QuotedColumnParser_1.QuotedColumnParser; } }));
var ColumnFormatter_1 = __webpack_require__(7148);
Object.defineProperty(exports, "ColumnFormatter", ({ enumerable: true, get: function () { return ColumnFormatter_1.ColumnFormatter; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2875:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuotedColumnParser = exports.NonQuotedColumnParser = exports.ColumnParser = exports.Token = exports.Scanner = exports.RowParser = exports.Parser = void 0;
var Parser_1 = __webpack_require__(6593);
Object.defineProperty(exports, "Parser", ({ enumerable: true, get: function () { return Parser_1.Parser; } }));
var RowParser_1 = __webpack_require__(5672);
Object.defineProperty(exports, "RowParser", ({ enumerable: true, get: function () { return RowParser_1.RowParser; } }));
var Scanner_1 = __webpack_require__(6679);
Object.defineProperty(exports, "Scanner", ({ enumerable: true, get: function () { return Scanner_1.Scanner; } }));
var Token_1 = __webpack_require__(1248);
Object.defineProperty(exports, "Token", ({ enumerable: true, get: function () { return Token_1.Token; } }));
var column_1 = __webpack_require__(4077);
Object.defineProperty(exports, "ColumnParser", ({ enumerable: true, get: function () { return column_1.ColumnParser; } }));
Object.defineProperty(exports, "NonQuotedColumnParser", ({ enumerable: true, get: function () { return column_1.NonQuotedColumnParser; } }));
Object.defineProperty(exports, "QuotedColumnParser", ({ enumerable: true, get: function () { return column_1.QuotedColumnParser; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1094:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeaderTransformer = void 0;
const lodash_isundefined_1 = __importDefault(__webpack_require__(5712));
const lodash_isfunction_1 = __importDefault(__webpack_require__(1130));
const lodash_uniq_1 = __importDefault(__webpack_require__(7741));
const lodash_groupby_1 = __importDefault(__webpack_require__(1311));
class HeaderTransformer {
    constructor(parserOptions) {
        this.headers = null;
        this.receivedHeaders = false;
        this.shouldUseFirstRow = false;
        this.processedFirstRow = false;
        this.headersLength = 0;
        this.parserOptions = parserOptions;
        if (parserOptions.headers === true) {
            this.shouldUseFirstRow = true;
        }
        else if (Array.isArray(parserOptions.headers)) {
            this.setHeaders(parserOptions.headers);
        }
        else if (lodash_isfunction_1.default(parserOptions.headers)) {
            this.headersTransform = parserOptions.headers;
        }
    }
    transform(row, cb) {
        if (!this.shouldMapRow(row)) {
            return cb(null, { row: null, isValid: true });
        }
        return cb(null, this.processRow(row));
    }
    shouldMapRow(row) {
        const { parserOptions } = this;
        if (!this.headersTransform && parserOptions.renameHeaders && !this.processedFirstRow) {
            if (!this.receivedHeaders) {
                throw new Error('Error renaming headers: new headers must be provided in an array');
            }
            this.processedFirstRow = true;
            return false;
        }
        if (!this.receivedHeaders && Array.isArray(row)) {
            if (this.headersTransform) {
                this.setHeaders(this.headersTransform(row));
            }
            else if (this.shouldUseFirstRow) {
                this.setHeaders(row);
            }
            else {
                // dont do anything with the headers if we didnt receive a transform or shouldnt use the first row.
                return true;
            }
            return false;
        }
        return true;
    }
    processRow(row) {
        if (!this.headers) {
            return { row: row, isValid: true };
        }
        const { parserOptions } = this;
        if (!parserOptions.discardUnmappedColumns && row.length > this.headersLength) {
            if (!parserOptions.strictColumnHandling) {
                throw new Error(`Unexpected Error: column header mismatch expected: ${this.headersLength} columns got: ${row.length}`);
            }
            return {
                row: row,
                isValid: false,
                reason: `Column header mismatch expected: ${this.headersLength} columns got: ${row.length}`,
            };
        }
        if (parserOptions.strictColumnHandling && row.length < this.headersLength) {
            return {
                row: row,
                isValid: false,
                reason: `Column header mismatch expected: ${this.headersLength} columns got: ${row.length}`,
            };
        }
        return { row: this.mapHeaders(row), isValid: true };
    }
    mapHeaders(row) {
        const rowMap = {};
        const { headers, headersLength } = this;
        for (let i = 0; i < headersLength; i += 1) {
            const header = headers[i];
            if (!lodash_isundefined_1.default(header)) {
                const val = row[i];
                // eslint-disable-next-line no-param-reassign
                if (lodash_isundefined_1.default(val)) {
                    rowMap[header] = '';
                }
                else {
                    rowMap[header] = val;
                }
            }
        }
        return rowMap;
    }
    setHeaders(headers) {
        var _a;
        const filteredHeaders = headers.filter((h) => !!h);
        if (lodash_uniq_1.default(filteredHeaders).length !== filteredHeaders.length) {
            const grouped = lodash_groupby_1.default(filteredHeaders);
            const duplicates = Object.keys(grouped).filter((dup) => grouped[dup].length > 1);
            throw new Error(`Duplicate headers found ${JSON.stringify(duplicates)}`);
        }
        this.headers = headers;
        this.receivedHeaders = true;
        this.headersLength = ((_a = this.headers) === null || _a === void 0 ? void 0 : _a.length) || 0;
    }
}
exports.HeaderTransformer = HeaderTransformer;
//# sourceMappingURL=HeaderTransformer.js.map

/***/ }),

/***/ 1074:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RowTransformerValidator = void 0;
const lodash_isfunction_1 = __importDefault(__webpack_require__(1130));
const types_1 = __webpack_require__(1005);
class RowTransformerValidator {
    constructor() {
        this._rowTransform = null;
        this._rowValidator = null;
    }
    // eslint-disable-next-line @typescript-eslint/no-shadow
    static createTransform(transformFunction) {
        if (types_1.isSyncTransform(transformFunction)) {
            return (row, cb) => {
                let transformed = null;
                try {
                    transformed = transformFunction(row);
                }
                catch (e) {
                    return cb(e);
                }
                return cb(null, transformed);
            };
        }
        return transformFunction;
    }
    static createValidator(validateFunction) {
        if (types_1.isSyncValidate(validateFunction)) {
            return (row, cb) => {
                cb(null, { row, isValid: validateFunction(row) });
            };
        }
        return (row, cb) => {
            validateFunction(row, (err, isValid, reason) => {
                if (err) {
                    return cb(err);
                }
                if (isValid) {
                    return cb(null, { row, isValid, reason });
                }
                return cb(null, { row, isValid: false, reason });
            });
        };
    }
    set rowTransform(transformFunction) {
        if (!lodash_isfunction_1.default(transformFunction)) {
            throw new TypeError('The transform should be a function');
        }
        this._rowTransform = RowTransformerValidator.createTransform(transformFunction);
    }
    set rowValidator(validateFunction) {
        if (!lodash_isfunction_1.default(validateFunction)) {
            throw new TypeError('The validate should be a function');
        }
        this._rowValidator = RowTransformerValidator.createValidator(validateFunction);
    }
    transformAndValidate(row, cb) {
        return this.callTransformer(row, (transformErr, transformedRow) => {
            if (transformErr) {
                return cb(transformErr);
            }
            if (!transformedRow) {
                return cb(null, { row: null, isValid: true });
            }
            return this.callValidator(transformedRow, (validateErr, validationResult) => {
                if (validateErr) {
                    return cb(validateErr);
                }
                if (validationResult && !validationResult.isValid) {
                    return cb(null, { row: transformedRow, isValid: false, reason: validationResult.reason });
                }
                return cb(null, { row: transformedRow, isValid: true });
            });
        });
    }
    callTransformer(row, cb) {
        if (!this._rowTransform) {
            return cb(null, row);
        }
        return this._rowTransform(row, cb);
    }
    callValidator(row, cb) {
        if (!this._rowValidator) {
            return cb(null, { row, isValid: true });
        }
        return this._rowValidator(row, cb);
    }
}
exports.RowTransformerValidator = RowTransformerValidator;
//# sourceMappingURL=RowTransformerValidator.js.map

/***/ }),

/***/ 845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeaderTransformer = exports.RowTransformerValidator = void 0;
var RowTransformerValidator_1 = __webpack_require__(1074);
Object.defineProperty(exports, "RowTransformerValidator", ({ enumerable: true, get: function () { return RowTransformerValidator_1.RowTransformerValidator; } }));
var HeaderTransformer_1 = __webpack_require__(1094);
Object.defineProperty(exports, "HeaderTransformer", ({ enumerable: true, get: function () { return HeaderTransformer_1.HeaderTransformer; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1005:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSyncValidate = exports.isSyncTransform = void 0;
exports.isSyncTransform = (transform) => transform.length === 1;
exports.isSyncValidate = (validate) => validate.length === 1;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 1007:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var once = __webpack_require__(3658);

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);
	var cancelled = false;

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		process.nextTick(onclosenexttick);
	};

	var onclosenexttick = function() {
		if (cancelled) return;
		if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		cancelled = true;
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;


/***/ }),

/***/ 6754:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CsvParserStream = exports.ParserOptions = exports.parseFile = exports.parseStream = exports.parseString = exports.parse = exports.FormatterOptions = exports.CsvFormatterStream = exports.writeToPath = exports.writeToString = exports.writeToBuffer = exports.writeToStream = exports.write = exports.format = void 0;
var format_1 = __webpack_require__(2441);
Object.defineProperty(exports, "format", ({ enumerable: true, get: function () { return format_1.format; } }));
Object.defineProperty(exports, "write", ({ enumerable: true, get: function () { return format_1.write; } }));
Object.defineProperty(exports, "writeToStream", ({ enumerable: true, get: function () { return format_1.writeToStream; } }));
Object.defineProperty(exports, "writeToBuffer", ({ enumerable: true, get: function () { return format_1.writeToBuffer; } }));
Object.defineProperty(exports, "writeToString", ({ enumerable: true, get: function () { return format_1.writeToString; } }));
Object.defineProperty(exports, "writeToPath", ({ enumerable: true, get: function () { return format_1.writeToPath; } }));
Object.defineProperty(exports, "CsvFormatterStream", ({ enumerable: true, get: function () { return format_1.CsvFormatterStream; } }));
Object.defineProperty(exports, "FormatterOptions", ({ enumerable: true, get: function () { return format_1.FormatterOptions; } }));
var parse_1 = __webpack_require__(6991);
Object.defineProperty(exports, "parse", ({ enumerable: true, get: function () { return parse_1.parse; } }));
Object.defineProperty(exports, "parseString", ({ enumerable: true, get: function () { return parse_1.parseString; } }));
Object.defineProperty(exports, "parseStream", ({ enumerable: true, get: function () { return parse_1.parseStream; } }));
Object.defineProperty(exports, "parseFile", ({ enumerable: true, get: function () { return parse_1.parseFile; } }));
Object.defineProperty(exports, "ParserOptions", ({ enumerable: true, get: function () { return parse_1.ParserOptions; } }));
Object.defineProperty(exports, "CsvParserStream", ({ enumerable: true, get: function () { return parse_1.CsvParserStream; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1528:
/***/ ((module) => {

"use strict";

module.exports = (flag, argv) => {
	argv = argv || process.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ 770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const https = __webpack_require__(7211)
const http = __webpack_require__(8605)
const { URL } = __webpack_require__(8835)

class HttpProxyAgent extends http.Agent {
  constructor (options) {
    const { proxy, ...opts } = options
    super(opts)
    this.proxy = typeof proxy === 'string'
      ? new URL(proxy)
      : proxy
  }

  createConnection (options, callback) {
    const requestOptions = {
      method: 'CONNECT',
      host: this.proxy.hostname,
      port: this.proxy.port,
      path: `${options.host}:${options.port}`,
      headers: { connection: this.keepAlive ? 'keep-alive' : 'close' },
      agent: false
    }

    if (this.proxy.username != null && this.proxy.password != null) {
      const base64 = Buffer.from(`${this.proxy.username}:${this.proxy.password}`).toString('base64')
      requestOptions.headers['proxy-authorization'] = `Basic ${base64}`
    }

    const request = (this.proxy.protocol === 'http:' ? http : https).request(requestOptions)
    request.once('connect', (response, socket, head) => {
      request.removeAllListeners()
      socket.removeAllListeners()
      if (response.statusCode === 200) {
        callback(null, socket)
      } else {
        callback(new Error(`Bad response: ${response.statusCode}`), null)
      }
    })

    request.once('error', err => {
      request.removeAllListeners()
      callback(err, null)
    })

    request.end()
  }
}

class HttpsProxyAgent extends https.Agent {
  constructor (options) {
    const { proxy, ...opts } = options
    super(opts)
    this.proxy = typeof proxy === 'string'
      ? new URL(proxy)
      : proxy
  }

  createConnection (options, callback) {
    const requestOptions = {
      method: 'CONNECT',
      host: this.proxy.hostname,
      port: this.proxy.port,
      path: `${options.host}:${options.port}`,
      headers: { connection: this.keepAlive ? 'keep-alive' : 'close' },
      agent: false
    }

    if (this.proxy.username != null && this.proxy.password != null) {
      const base64 = Buffer.from(`${this.proxy.username}:${this.proxy.password}`).toString('base64')
      requestOptions.headers['proxy-authorization'] = `Basic ${base64}`
    }

    const request = (this.proxy.protocol === 'http:' ? http : https).request(requestOptions)
    request.once('connect', (response, socket, head) => {
      request.removeAllListeners()
      socket.removeAllListeners()
      if (response.statusCode === 200) {
        const secureSocket = super.createConnection({ ...options, socket })
        callback(null, secureSocket)
      } else {
        callback(new Error(`Bad response: ${response.statusCode}`), null)
      }
    })

    request.once('error', err => {
      request.removeAllListeners()
      callback(err, null)
    })

    request.end()
  }
}

module.exports = {
  HttpProxyAgent,
  HttpsProxyAgent
}


/***/ }),

/***/ 3054:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;


/***/ }),

/***/ 1311:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!seen.has(othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
              return seen.add(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, customizer, bitmask, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity]
 *  The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    result[key] = [value];
  }
});

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = groupBy;


/***/ }),

/***/ 9153:
/***/ ((module) => {

/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && objectToString.call(value) == boolTag);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isBoolean;


/***/ }),

/***/ 9290:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;


/***/ }),

/***/ 1130:
/***/ ((module) => {

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag = '[object Undefined]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isFunction;


/***/ }),

/***/ 6042:
/***/ ((module) => {

/**
 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),

/***/ 5712:
/***/ ((module) => {

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ 7741:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each
 * element is kept.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length)
    ? baseUniq(array)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = uniq;


/***/ }),

/***/ 732:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 3658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wrappy = __webpack_require__(8959)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 736:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var once = __webpack_require__(3658)
var eos = __webpack_require__(1007)
var fs = __webpack_require__(5747) // we only need fs to get the ReadStream and WriteStream prototypes

var noop = function () {}
var ancient = /^v?\.0/.test(process.version)

var isFn = function (fn) {
  return typeof fn === 'function'
}

var isFS = function (stream) {
  if (!ancient) return false // newer node version do not need to care about fs is a special way
  if (!fs) return false // browser
  return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close)
}

var isRequest = function (stream) {
  return stream.setHeader && isFn(stream.abort)
}

var destroyer = function (stream, reading, writing, callback) {
  callback = once(callback)

  var closed = false
  stream.on('close', function () {
    closed = true
  })

  eos(stream, {readable: reading, writable: writing}, function (err) {
    if (err) return callback(err)
    closed = true
    callback()
  })

  var destroyed = false
  return function (err) {
    if (closed) return
    if (destroyed) return
    destroyed = true

    if (isFS(stream)) return stream.close(noop) // use close for fs streams to avoid fd leaks
    if (isRequest(stream)) return stream.abort() // request.destroy just do .end - .abort is what we want

    if (isFn(stream.destroy)) return stream.destroy()

    callback(err || new Error('stream was destroyed'))
  }
}

var call = function (fn) {
  fn()
}

var pipe = function (from, to) {
  return from.pipe(to)
}

var pump = function () {
  var streams = Array.prototype.slice.call(arguments)
  var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop

  if (Array.isArray(streams[0])) streams = streams[0]
  if (streams.length < 2) throw new Error('pump requires two streams per minimum')

  var error
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1
    var writing = i > 0
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err
      if (err) destroys.forEach(call)
      if (reading) return
      destroys.forEach(call)
      callback(error)
    })
  })

  return streams.reduce(pipe)
}

module.exports = pump


/***/ }),

/***/ 6872:
/***/ ((module) => {

"use strict";


const hasBuffer = typeof Buffer !== 'undefined'
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/

function parse (text, reviver, options) {
  // Normalize arguments
  if (options == null) {
    if (reviver !== null && typeof reviver === 'object') {
      options = reviver
      reviver = undefined
    } else {
      options = {}
    }
  }

  const protoAction = options.protoAction || 'error'
  const constructorAction = options.constructorAction || 'error'

  if (hasBuffer && Buffer.isBuffer(text)) {
    text = text.toString()
  }

  // BOM checker
  if (text && text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1)
  }

  // Parse normally, allowing exceptions
  const obj = JSON.parse(text, reviver)

  // options: 'error' (default) / 'remove' / 'ignore'
  if (protoAction === 'ignore' && constructorAction === 'ignore') {
    return obj
  }

  // Ignore null and non-objects
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (protoAction !== 'ignore' && constructorAction !== 'ignore') {
    if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
      return obj
    }
  } else if (protoAction !== 'ignore' && constructorAction === 'ignore') {
    if (suspectProtoRx.test(text) === false) {
      return obj
    }
  } else {
    if (suspectConstructorRx.test(text) === false) {
      return obj
    }
  }

  // Scan result for proto keys
  scan(obj, { protoAction, constructorAction })

  return obj
}

function scan (obj, { protoAction = 'error', constructorAction = 'error' } = {}) {
  let next = [obj]

  while (next.length) {
    const nodes = next
    next = []

    for (const node of nodes) {
      if (protoAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, '__proto__')) { // Avoid calling node.hasOwnProperty directly
        if (protoAction === 'error') {
          throw new SyntaxError('Object contains forbidden prototype property')
        }

        delete node.__proto__ // eslint-disable-line no-proto
      }

      if (constructorAction !== 'ignore' && Object.prototype.hasOwnProperty.call(node, 'constructor')) { // Avoid calling node.hasOwnProperty directly
        if (constructorAction === 'error') {
          throw new SyntaxError('Object contains forbidden prototype property')
        }

        delete node.constructor
      }

      for (const key in node) {
        const value = node[key]
        if (value && typeof value === 'object') {
          next.push(node[key])
        }
      }
    }
  }
}

function safeParse (text, reviver) {
  try {
    return parse(text, reviver)
  } catch (ignoreError) {
    return null
  }
}

module.exports = {
  parse,
  scan,
  safeParse
}


/***/ }),

/***/ 8354:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const os = __webpack_require__(2087);
const hasFlag = __webpack_require__(1528);

const env = process.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env) {
	forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if (process.platform === 'win32') {
		// Node.js 7.5.0 is the first version of Node.js to include a patch to
		// libuv that enables 256 color output on Windows. Anything earlier and it
		// won't work. However, here we target Node.js 8 at minimum as it is an LTS
		// release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows
		// release that supports 256 colors. Windows 10 build 14931 is the first release
		// that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(process.versions.node.split('.')[0]) >= 8 &&
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	if (env.TERM === 'dumb') {
		return min;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(process.stdout),
	stderr: getSupportLevel(process.stderr)
};


/***/ }),

/***/ 8959:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 8450:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.query = exports.add = exports.resetIndex = void 0;
const elasticsearch_1 = __webpack_require__(8221);
const enterprise_1 = __webpack_require__(7454);
const ELASTICSEARCH_URL = process.env.ELASTICSEARCH_URL || "http://localhost:9200";
const API_KEY = process.env.API_KEY;
const indexName = "cdtn-siren";
const auth = API_KEY ? { apiKey: API_KEY } : undefined;
const esClientConfig = {
    auth,
    node: `${ELASTICSEARCH_URL}`,
};
const esClient = new elasticsearch_1.Client(esClientConfig);
const analysis = {
    filter: {
        french_elision: {
            type: "elision",
            articles_case: true,
            articles: [
                "l",
                "m",
                "t",
                "qu",
                "n",
                "s",
                "j",
                "d",
                "c",
                "jusqu",
                "quoiqu",
                "lorsqu",
                "puisqu",
            ],
        },
        french_stop: {
            type: "stop",
            stopwords: "_french_",
        },
        french_stemmer: {
            type: "stemmer",
            language: "light_french",
        },
    },
    analyzer: {
        french_indexing: {
            tokenizer: "standard",
            filter: [
                "french_elision",
                "lowercase",
                "french_stop",
                "french_stemmer",
                // very important filter in order to remove duplication between
                // the different naming fields (nom, enseigne, denomination...)
                "unique",
            ],
        },
    },
};
const index = {
    similarity: {
        bm25_no_norm_length: {
            type: "BM25",
            b: 0,
        },
    },
};
const deleteOldIndices = async (alias, indexToKeep) => {
    const allIndices = await esClient.cat
        .indices({ format: "json" })
        .then(({ body }) => body.map(({ index }) => index));
    // list indices to delete
    const matchingIndices = allIndices.filter((index) => index.startsWith(alias) && index != indexToKeep);
    const deletePromises = matchingIndices.map((index) => esClient.indices.delete({ index }));
    await Promise.all(deletePromises)
        .then(() => console.log(`Indices deleted: ${matchingIndices}`))
        .catch(() => console.error(`Error when trying to delete ${matchingIndices}`));
};
const updateAlias = (indexPattern, newIndex, alias) => esClient.indices.updateAliases({
    body: {
        actions: [
            {
                remove: {
                    alias,
                    index: indexPattern,
                },
            },
            {
                add: {
                    alias: alias,
                    index: newIndex,
                },
            },
        ],
    },
});
const resetIndex = async () => {
    const id = Math.floor(Math.random() * 100001);
    const newIndex = `${indexName}-${id}`;
    const indexPattern = `${indexName}-*`;
    const body = { mappings: enterprise_1.mappings, settings: { analysis, index } };
    await esClient.indices.create({
        index: newIndex,
        body,
    });
    await updateAlias(indexPattern, newIndex, indexName);
    await deleteOldIndices(indexPattern, newIndex);
};
exports.resetIndex = resetIndex;
const bulkInsert = async (enterprises) => {
    // async function bulkIndexDocuments({ client, indexName, documents }) {
    try {
        const resp = await esClient.bulk({
            refresh: "wait_for",
            body: enterprises.reduce((state, enterprise) => state.concat({
                index: {
                    _index: indexName,
                    _id: enterprise.siret,
                },
            }, enterprise_1.mapEnterprise(enterprise)), []),
            //   body: enterprises.map(mapEnterprise),
            index: indexName,
        });
        if (resp.body.errors) {
            const errorDocs = resp.body.items.filter((item) => item.index.status != 201);
            console.error(`Errors during indexation : ${JSON.stringify(errorDocs)}`);
        }
        console.info(`Index ${enterprises.length} documents.`);
    }
    catch (error) {
        console.error("index documents", error.body.error);
    }
};
const add = async (enterprises) => {
    const batches = [];
    let i = 0;
    const batchSize = 100;
    while (i < enterprises.length) {
        batches.push(enterprises.slice(i, (i += batchSize)));
    }
    console.log(`${batches.length} batches`);
    return batches
        .map(bulkInsert)
        .reduce((prev, cur, i) => prev.then(cur), Promise.resolve());
};
exports.add = add;
const query = (query) => {
    return [];
};
exports.query = query;


/***/ }),

/***/ 7454:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapEnterprise = exports.mappings = void 0;
exports.mappings = {
    properties: {
        trancheEffectifsUniteLegale: { type: "rank_feature" },
        siret: { type: "keyword" },
        siren: { type: "keyword" },
        codePostalEtablissement: { type: "keyword" },
        libelleCommuneEtablissement: { type: "keyword" },
        nomUniteLegale: { type: "keyword" },
        nomUsageUniteLegale: { type: "keyword" },
        sigleUniteLegale: { type: "keyword" },
        denominationUniteLegale: { type: "keyword" },
        denominationUsuelle1UniteLegale: { type: "keyword" },
        denominationUsuelle2UniteLegale: { type: "keyword" },
        denominationUsuelle3UniteLegale: { type: "keyword" },
        enseigne1Etablissement: { type: "keyword" },
        enseigne2Etablissement: { type: "keyword" },
        enseigne3Etablissement: { type: "keyword" },
        denominationUsuelleEtablissement: { type: "keyword" },
        idcc: { type: "keyword" },
        cp: { type: "keyword" },
        ville: {
            analyzer: "french_indexing",
            search_analyzer: "french",
            type: "text",
        },
        address: {
            analyzer: "french_indexing",
            search_analyzer: "french",
            type: "text",
        },
        naming: {
            analyzer: "french_indexing",
            search_analyzer: "french",
            type: "text",
            similarity: "bm25_no_norm_length",
        },
    },
};
const mapEnterprise = (enterprise) => {
    // ranking feature cannot be 0
    if (!Number.parseFloat(enterprise.trancheEffectifsUniteLegale))
        enterprise.trancheEffectifsUniteLegale = 0.1;
    const naming = Array.from(new Set([
        enterprise.nomUniteLegale,
        enterprise.nomUsageUniteLegale,
        enterprise.sigleUniteLegale,
        enterprise.denominationUniteLegale,
        enterprise.denominationUsuelle1UniteLegale,
        enterprise.denominationUsuelle2UniteLegale,
        enterprise.denominationUsuelle3UniteLegale,
        enterprise.enseigne1Etablissement,
        enterprise.enseigne2Etablissement,
        enterprise.enseigne3Etablissement,
        enterprise.denominationUsuelleEtablissement,
        enterprise.codePostalEtablissement,
    ]))
        .filter((t) => t)
        .join(" ");
    return {
        address: enterprise.geo_adresse,
        cp: enterprise.codePostalEtablissement,
        ville: enterprise.libelleCommuneEtablissement,
        naming,
        ...Object.fromEntries(Object.entries(enterprise).filter(([k, v]) => k && v)),
    };
};
exports.mapEnterprise = mapEnterprise;


/***/ }),

/***/ 1414:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs = __importStar(__webpack_require__(5747));
const path = __importStar(__webpack_require__(5622));
const csv = __importStar(__webpack_require__(6754));
const elastic_1 = __webpack_require__(8450);
const ASSEMBLY_FILE = process.env.ASSEMBLY_FILE || "../output/assembly.csv";
const parseEnterprises = () => {
    const stream = fs.createReadStream(path.resolve(ASSEMBLY_FILE));
    const BUFFER_SIZE = 500;
    let enterprisesBuffer = [];
    stream
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => console.error(error))
        .on("data", async (e) => {
        enterprisesBuffer.push(e);
        if (enterprisesBuffer.length >= BUFFER_SIZE) {
            // create an immutable copy of the array
            const batch = enterprisesBuffer.slice();
            enterprisesBuffer = [];
            await elastic_1.add(batch);
        }
    })
        .on("end", (rowCount) => console.log(`Parsed ${rowCount} rows`));
    return new Promise((fulfill) => stream.on("finish", fulfill).on("close", fulfill));
};
elastic_1.resetIndex().then(() => parseEnterprises());


/***/ }),

/***/ 7529:
/***/ ((module) => {

"use strict";
module.exports = {"i8":"7.11.0"};

/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 4293:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 1191:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4304:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 3867:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(1414);
/******/ })()
;