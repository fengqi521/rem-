/**
 * Copyright 2014-2019, FengMap, Ltd.
 * All rights reserved.
 * -
 * @authors  ZWH (zhangweiheng@fengmap.com)
 * @date     2019/5/29 23:05
 * @describe
 */
'use strict';

function refreshRem(ratio) {
  var winW = document.documentElement.clientWidth;
  var size = winW / ratio;
  document.documentElement.style.fontSize = size + 'px';
}
