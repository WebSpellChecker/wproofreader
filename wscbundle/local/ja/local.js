/**
 * scayt v3.28.5884
 * Copyright (c) 2000-2025 WebSpellChecker LLC All rights reserved.
 */

/*!
 * jQuip JavaScript Library v0.0.3
 * https://github.com/mythz/jquip
 *
 * Copyright, Demis Bellot
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

/*!
 * Rangy, a cross-browser JavaScript range and selection library
 * http://code.google.com/p/rangy/
 *
 * Copyright 2012, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3alpha.681
 * Build date: 20 July 2012
 */

/*! @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 0.8.1 - Build: 266 (2012/07/31 03:33 PM)
 */

/*!
* flag-icon-css
* https://github.com/lipis/flag-icon-css
*
* Copyright 2013 Panayiotis Lipiridis
* Licensed under the MIT license.
*/ 
!function(a,b){a&&(a.prototype.Localization.lang[b]={btn_add:"追加",btn_addWord:"単語を追加",btn_deleteWord:"単語を削除",btn_createDic:"作成",btn_deleteDic:"削除",btn_renameDic:"名前を変更",btn_connectDic:"接続",btn_disconnectDic:"切断",btn_cancel:"キャンセル",btn_disable:"無効にする",btn_enable:"有効にする",btn_ignore:"一度無視",btn_ignoreAll:"すべて無視",btn_disableRule:"ルールを無効にする",btn_moreSuggestions:"その他の提案",btn_noSuggestions:"提案なし",btn_suggestionDescription:"提案の説明",btn_options:"オプションを無視",btn_dictionaries:"辞書",btn_settings:"設定",btn_copy:"コピー",btn_close:"閉じる",btn_goToDic:"辞書に移動",btn_showMore:"その他のオプション",btn_showLess:"オプションを非表示",btn_proofreadDialog:"ダイアログで校正",btn_prevProblem:"前の提案",btn_nextProblem:"次の提案",btn_assistantDialog:"AI文章作成アシスタント",btn_replace:"置き換える",btn_retry:"再試行",btn_report:"誤りを報告",btn_more:"さらに表示",btn_less:"表示を減らす",btn_suggestionType:"種類",placeholder_fieldNameDic:"辞書名を入力",placeholder_fieldAddWord:"新しい単語を入力",label_ignoreAllCapsWords:"すべて大文字の単語を無視",label_ignoreDomainNames:"ドメイン名を無視",label_ignoreWordsWithMixedCases:"大文字と小文字が混在する単語を無視",label_ignoreWordsWithNumbers:"数字を含む単語を無視",label_autocorrect:"自動的にスペルを修正",label_autocomplete:"自動補完の提案",label_spellingSuggestions:"スペリング",label_grammarSuggestions:"文法",label_styleGuideSuggestions:"スタイルガイド",label_styleSuggestions:"スタイル",about:"バージョン情報",version:"バージョン: ",tab_dictionaries:"辞書",tab_languages:"言語",tab_general:"全般",tab_options:"オプションを無視",text_title:"テキストチェッカー",text_productActions:"アクション",text_correctionBox:"提案のポップアップ",text_copyrights:"<p class='wsc-copyright__text'>&copy; 2025 WebSpellChecker LLC. All Rights Reserved.</p>",text_dictionaryWords:"辞書の単語",text_problemsCount:"提案",text_nothingToCheck:"チェックするものがありません。",text_noProblems:"よくできました！準備完了です。",text_replaceWith:"%s1 を %s2 に置換",text_disabled:"テキストチェッカー無効",text_prompts:"プロンプト",text_promptsLeft:"残りの今日のプロンプト数",text_inProgress:"処理中",text_noPromptsLeft:"今日のプロンプト制限数に達しました。後ほどお試しください。",text_longText:"テキストの長さが%s文字を超えています。AI文章作成アシスタントを起動できません。再試行してください。",text_shortText:"AI文章作成アシスタントを起動するには、テキスト長が不十分です。最低%s文字必要です。再試行してください。",text_unsupportedAssistantLanguage:"デフォルトで選択された言語は、AI文章作成アシスタントではサポートされていません。",text_assistantIsNotEnabled:"AI文章作成アシスタントが現在の設定で有効になっていません。サポートにお問い合わせください。",text_context:"元のテキスト",message_success_createDic:"辞書 '%s' が作成されました。",message_error_createDic:"辞書 '%s' の作成に失敗しました。既に存在します。",message_success_removeDic:"辞書 '%s' が削除されました。",message_error_removeDic:"辞書 '%s'の削除に失敗しました。見つかりません。",message_success_restoreDic:"辞書 '%s' が接続されました。",message_error_restoreDic:"辞書 '%s'への接続に失敗しました。見つかりません。",message_success_disconnectDic:"辞書 '%s' が切断されました。",message_error_disconnectDic:"辞書 '%s'の接続解除に失敗しました。見つかりません。",message_success_renameDic:"辞書 '%s' の名前が変更されました。",message_error_renameDic:"辞書 '%s'の名前変更に失敗しました。見つかりません。",message_success_deleteWordDic:"単語 '%s' が削除されました。",message_error_deleteWordDic:"単語 '%s'の削除に失敗しました。見つかりません。",message_success_addWordDic:"単語 '%s' が追加されました。",message_error_addWordDic:"単語 '%s' の追加に失敗しました。",message_error_wordAlreadyAddedDic:"単語 '%s' の追加に失敗しました。既に存在します。",message_error_wordWithBannedSymbolsDic:"単語 '%s' の追加に失敗しました。文字と数字を使用してください。特殊文字は使用できません。",message_error_nameWithBannedSymbolsDic:"辞書 '%s' の作成に失敗しました。ラテン文字と数字を使用してください。特殊文字やスペースは使用できません。",message_success_copy:"コピーされました。",message_error_copy:"コピー操作は、キーボードショートカットからのみ利用できます。Ctrl/Cmd + C を使用してください。",message_error_assist:"問題が発生しました。後ほどもう一度お試しください。",message_success_replace:"置換済み",btn_langs:"言語",btn_dictionaryPreferences:"辞書の設定",btn_userManual:"詳細についてはユーザーマニュアルをご確認ください",label_fieldNameDic:"辞書名",message_info_emptyDic:"辞書名を空にすることはできません。",text_descriptionDicForFree:"製品の無料版では、個人辞書に追加されたすべての単語がブラウザのローカルストレージに保存されます。個人辞書を保存し、様々なブラウザやデバイスからアクセスするには、WebSpellCheckerサーバーに辞書を保存する必要があります。このオプションはフルバージョンでのみ利用可能です。",text_descriptionDicForPaid:"辞書の操作方法の詳細",oldck_btn_about:"SCAYT について",oldck_btn_toggle:"SCAYTを有効にする",oldck_btn_langs:"言語",oldck_btn_options:"オプション",oldck_btn_dictionaries:"辞書",oldck_btn_userManual:"詳細についてはユーザーマニュアルをご確認ください",oldck_tab_dictionaries:"辞書",oldck_tab_languages:"言語",oldck_tab_options:"オプション",oldck_tab_about:"バージョン情報",oldck_text_title:"SCAYT",oldck_text_descriptionDicForFree:"SCAYT製品の無料版では、個人辞書に追加されたすべての単語がブラウザのローカルストレージに保存されます。個人辞書を保存し、様々なブラウザやデバイスからアクセスするには、WebSpellCheckerサーバーに辞書を保存する必要があります。このオプションは<a href='https://webspellchecker.com/wsc-scayt-ckeditor4/' target='_blank' style='text-decoration: underline; color: blue;'>フルバージョン</a>でのみ利用可能です。",oldck_text_descriptionDicForPaid:"<a href='https://webspellchecker.com/app/user-manual/scayt_plugin_for_ckeditor4_user_manual.pdf' target='_blank' style='text-decoration: underline; color: blue;'>辞書の操作方法の詳細</a>",oldck_message_success_wordAlreadyAddedDic:"単語 '%s' の追加に失敗しました。既に存在します。",btn_about:"WProofreader について",btn_restoreDic:"復元",btn_toggle:"有効にする",btn_undo:"元に戻す",btn_redo:"やり直し",btn_cut:"切り取り",btn_paste:"貼り付け",btn_help:"ヘルプ",btn_info:"情報",btn_apply:"適用",btn_back:"戻る",btn_edit:"編集",btn_moreLanguages:"言語を追加する方法の詳細",btn_learnDictionary:"辞書の操作方法の詳細",btn_showSection:"セクションを表示",btn_hideSection:"セクションを非表示",btn_finishChecking:"チェックを終了",btn_maximize:"最大化",btn_restore:"復元",btn_leave:"はい、終了します",btn_stay:"いいえ、続行します",message_info_opera:"Opera ではサポートされていません",message_info_cut:"切り取りアクションは、ブラウザでキーボードショートカットを使用する場合にのみ利用可能です。Ctrl/Cmd + X を使用してください",message_info_copy:"コピーアクションは、ブラウザでキーボードショートカットを使用する場合にのみ利用可能です。Ctrl/Cmd + C を使用してください",message_info_paste:"キーボード（Ctrl/Cmd+V）を使用してここにテキストを挿入し、貼り付けをクリックしてください。",about_throw_copy:"<p class='wsc-copyright__text'>&copy; 2025 WebSpellChecker LLC. All Rights Reserved.</p>",text_descriptionDic:"辞書なしで追加された単語は、ブラウザにのみ保存されます。",text_spellingSectionHeader:"スペルの提案",text_grammarSectionHeader:"文法の提案",text_suggestionsContainer:"提案コンテナ",text_problem:"提案",text_changeTo:"変更先",message_confirm_closeWithoutSave:"終了してもよろしいですか？チェックを終了をクリックしないと、すべての変更が失われます。"})}(window.WEBSPELLCHECKER.CORE,"ja");