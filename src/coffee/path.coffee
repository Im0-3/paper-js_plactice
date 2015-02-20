###
  pathオブジェクトの練習
  
###
window.onload = ->
  onReady()

onReady = ->
  ###
  canvasに新しいプロジェクトを設定
  ###
  canvas = document.getElementById 'myCanvas'
  paper.setup canvas

  ###
  パスで四角形を描く
  ###
  #パス インスタンスを作成
  path = new paper.Path()
  #線の色を設定
  path.strokeColor = 'black'
  #塗りつぶし色の設定
  path.fillColor = '#ffbbbb'
  #点の設定
  path.add new paper.Point 50, 50
  path.add new paper.Point 50, 100
  path.add new paper.Point 100, 100
  path.add new paper.Point 100, 50
  #パスを閉じる
  path.closed = true
  #ハンドルを可視化
  path.fullySelected = true

  ###
  パスのセグメントを滑らかにする
  ###
  copy = path.clone()
  copy.fillColor = '#bbffbb'
  #ハンドルの設定をコピーするか
  copy.fullySelected = true
  #x方向に移動
  copy.position.x += 100
  #セグメントを滑らかにする
  copy.smooth()

  ###
  パスのセグメントを削除する
  ###
  copy2 = copy.clone()
  copy2.fillColor = '#bbbbff'
  copy2.fullySelected = true
  copy2.position.x += 100

  #セグメントの削除
  copy2.removeSegment(0);

  ###
  円を描く
  ###
  circle = new paper.Path.Circle new paper.Point(75, 150), 30
  circle.fillColor = '#ffffaa'

  ###
  四角形を描く
  ###
  #四角形を描く
  rectangle = new paper.Path.Rectangle new paper.Point(150, 130), new paper.Point(300, 180)
  rectangle.fillColor = '#aaffff'
  rectangle.selected = true;

  #角丸四角形を描く
  radiusRect = new paper.Path.Rectangle
    topLeft: [150, 200],
    bottomRight: [300, 240],
    radius: 10,
    fillColor: '#ffaaff'

  ###
  正多角形を描く
  ###
  #三角形を描く
  center = new paper.Point 80, 240
  sides = 3
  radius = 40
  triangle = new paper.Path.RegularPolygon center, sides, radius
  triangle.fillColor = '#99ccff'

  #六角形を描く
  center = new paper.Point 80, 320
  sides = 6
  radius = 40
  hexagon = new paper.Path.RegularPolygon center, sides, radius
  hexagon.fillColor = '#99ccff'

  ###
  スタイルの設定について
  ###
  #線を描く
  line = new paper.Path {
    segments: [[160, 300], [180, 360], [320, 320]]
    selected: true
  }

  #スタイルはオブジェクトでまとめて設定が可能
  myStyle =
    strokeColor: '#ff0000'
    strokeWidth: 10
    strokeCap: 'round' #round or butt
    strokeJoin: 'round' #round or bevel
    dashArray: [10, 12]
    fillColor: 'blue'

  line.style = myStyle
  line.fillColor = null; #スタイルの設定を解除する場合はnullを渡す

  ###
  星形を書く
  ###
  center = new paper.Point 380, 70
  points = 5
  radius1 = 20
  radius2 = 40
  star = new paper.Path.Star center, points, radius1, radius2
  #styleは他のpathから継承することが可能
  star.style = triangle.style

  #viewを更新
  paper.view.draw()
  return