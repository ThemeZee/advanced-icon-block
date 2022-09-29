/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks'; 
import {
	addCard,
	addSubmenu,
	alignCenter,
	alignJustify,
	alignLeft,
	alignNone,
	alignRight,
	archive,
	arrowDown,
	arrowLeft,
	arrowRight,
	arrowUp,
	atSymbol,
	aspectRatio,
	audio,
	backup,
	blockDefault,
	blockTable,
	box,
	brush,
	bug,
	button,
	buttons,
	calendar,
	cancelCircleFilled,
	capturePhoto,
	captureVideo,
	category,
	chartBar,
	check,
	chevronDown,
	chevronLeft,
	chevronRight,
	chevronRightSmall,
	chevronUp,
	classic,
	close,
	closeSmall,
	cloudUpload,
	cloud,
	code,
	cog,
	color,
	column,
	columns,
	comment,
	commentAuthorAvatar,
	commentAuthorName,
	commentContent,
	commentReplyLink,
	cover,
	create,
	crop,
	currencyDollar,
	currencyEuro,
	currencyPound,
	customPostType,
	desktop,
	dragHandle,
	download,
	edit,
	external,
	file,
	flipHorizontal,
	flipVertical,
	formatBold,
	formatCapitalize,
	formatIndent,
	formatIndentRTL,
	formatItalic,
	formatListBullets,
	formatListBulletsRTL,
	formatListNumbered,
	formatListNumberedRTL,
	formatLtr,
	formatLowercase,
	formatOutdent,
	formatOutdentRTL,
	formatRtl,
	formatStrikethrough,
	formatUnderline,
	formatUppercase,
	fullscreen,
	gallery,
	globe,
	grid,
	group,
	handle,
	heading,
	help,
	helpFilled,
	inbox,
	institution,
	home,
	html,
	image,
	info,
	insertAfter,
	insertBefore,
	justifyLeft,
	justifyCenter,
	justifyRight,
	justifySpaceBetween,
	key,
	keyboardClose,
	keyboardReturn,
	layout,
	lifesaver,
	link,
	linkOff,
	list,
	listView,
	lock,
	login,
	loop,
	mapMarker,
	media,
	mediaAndText,
	megaphone,
	menu,
	mobile,
	more,
	moreHorizontal,
	moreHorizontalMobile,
	moreVertical,
	moveTo,
	navigation,
	overlayText,
	pageBreak,
	customLink,
	page,
	pages,
	paragraph,
	payment,
	percent,
	positionCenter,
	positionLeft,
	positionRight,
	pencil,
	people,
	pin,
	plugins,
	plusCircleFilled,
	plusCircle,
	plus,
	post,
	postAuthor,
	postCategories,
	postContent,
	postComments,
	postCommentsCount,
	postCommentsForm,
	postDate,
	postExcerpt,
	postFeaturedImage,
	postList,
	postTerms,
	previous,
	next,
	preformatted,
	pullLeft,
	pullRight,
	pullquote,
	queryPagination,
	queryPaginationNext,
	queryPaginationNumbers,
	queryPaginationPrevious,
	quote,
	receipt,
	redo,
	removeBug,
	removeSubmenu,
	replace,
	reset,
	resizeCornerNE,
	reusableBlock,
	rotateLeft,
	rotateRight,
	row,
	rss,
	search,
	separator,
	settings,
	share,
	shield,
	shortcode,
	siteLogo,
	stack,
	starEmpty,
	starFilled,
	starHalf,
	store,
	stretchFullWidth,
	styles,
	shipping,
	stretchWide,
	subscript,
	superscript,
	swatch,
	symbol,
	symbolFilled,
	tableColumnAfter,
	tableColumnBefore,
	tableColumnDelete,
	tableRowAfter,
	tableRowBefore,
	tableRowDelete,
	table,
	tag,
	termDescription,
	footer,
	header,
	sidebar,
	textColor,
	tablet,
	tip,
	title,
	tool,
	trash,
	trendingDown,
	trendingUp,
	typography,
	undo,
	ungroup,
	unlock,
	update,
	upload,
	verse,
	video,
	warning,
	widget,
} from '@wordpress/icons';

const icons = [
	{
		name: 'addCard',
		icon: addCard,
		library: 'wordpress',
	},
	{
		name: 'addSubmenu',
		icon: addSubmenu,
		library: 'wordpress',
	},
	{
		name: 'alignCenter',
		icon: alignCenter,
		library: 'wordpress',
	},
	{
		name: 'alignJustify',
		icon: alignJustify,
		library: 'wordpress',
	},
	{
		name: 'alignLeft',
		icon: alignLeft,
		library: 'wordpress',
	},
	{
		name: 'alignNone',
		icon: alignNone,
		library: 'wordpress',
	},
	{
		name: 'alignRight',
		icon: alignRight,
		library: 'wordpress',
	},
	{
		name: 'archive',
		icon: archive,
		library: 'wordpress',
	},
	{
		name: 'arrowDown',
		icon: arrowDown,
		library: 'wordpress',
	},
	{
		name: 'arrowLeft',
		icon: arrowLeft,
		library: 'wordpress',
	},
	{
		name: 'arrowRight',
		icon: arrowRight,
		library: 'wordpress',
	},
	{
		name: 'arrowUp',
		icon: arrowUp,
		library: 'wordpress',
	},
	{
		name: 'atSymbol',
		icon: atSymbol,
		library: 'wordpress',
	},
	{
		name: 'aspectRatio',
		icon: aspectRatio,
		library: 'wordpress',
	},
	{
		name: 'audio',
		icon: audio,
		library: 'wordpress',
	},
	{
		name: 'backup',
		icon: backup,
		library: 'wordpress',
	},
	{
		name: 'blockDefault',
		icon: blockDefault,
		library: 'wordpress',
	},
	{
		name: 'blockTable',
		icon: blockTable,
		library: 'wordpress',
	},
	{
		name: 'box',
		icon: box,
		library: 'wordpress',
	},
	{
		name: 'brush',
		icon: brush,
		library: 'wordpress',
	},
	{
		name: 'bug',
		icon: bug,
		library: 'wordpress',
	},
	{
		name: 'button',
		icon: button,
		library: 'wordpress',
	},
	{
		name: 'buttons',
		icon: buttons,
		library: 'wordpress',
	},
	{
		name: 'calendar',
		icon: calendar,
		library: 'wordpress',
	},
	{
		name: 'cancelCircleFilled',
		icon: cancelCircleFilled,
		library: 'wordpress',
	},
	{
		name: 'capturePhoto',
		icon: capturePhoto,
		library: 'wordpress',
	},
	{
		name: 'captureVideo',
		icon: captureVideo,
		library: 'wordpress',
	},
	{
		name: 'category',
		icon: category,
		library: 'wordpress',
	},
	{
		name: 'chartBar',
		icon: chartBar,
		library: 'wordpress',
	},
	{
		name: 'check',
		icon: check,
		library: 'wordpress',
	},
	{
		name: 'chevronDown',
		icon: chevronDown,
		library: 'wordpress',
	},
	{
		name: 'chevronLeft',
		icon: chevronLeft,
		library: 'wordpress',
	},
	{
		name: 'chevronRight',
		icon: chevronRight,
		library: 'wordpress',
	},
	{
		name: 'chevronRightSmall',
		icon: chevronRightSmall,
		library: 'wordpress',
	},
	{
		name: 'chevronUp',
		icon: chevronUp,
		library: 'wordpress',
	},
	{
		name: 'classic',
		icon: classic,
		library: 'wordpress',
	},
	{
		name: 'close',
		icon: close,
		library: 'wordpress',
	},
	{
		name: 'closeSmall',
		icon: closeSmall,
		library: 'wordpress',
	},
	{
		name: 'cloudUpload',
		icon: cloudUpload,
		library: 'wordpress',
	},
	{
		name: 'cloud',
		icon: cloud,
		library: 'wordpress',
	},
	{
		name: 'code',
		icon: code,
		library: 'wordpress',
	},
	{
		name: 'cog',
		icon: cog,
		library: 'wordpress',
	},
	{
		name: 'color',
		icon: color,
		library: 'wordpress',
	},
	{
		name: 'column',
		icon: column,
		library: 'wordpress',
	},
	{
		name: 'columns',
		icon: columns,
		library: 'wordpress',
	},
	{
		name: 'comment',
		icon: comment,
		library: 'wordpress',
	},
	{
		name: 'commentAuthorAvatar',
		icon: commentAuthorAvatar,
		library: 'wordpress',
	},
	{
		name: 'commentAuthorName',
		icon: commentAuthorName,
		library: 'wordpress',
	},
	{
		name: 'commentContent',
		icon: commentContent,
		library: 'wordpress',
	},
	{
		name: 'commentReplyLink',
		icon: commentReplyLink,
		library: 'wordpress',
	},
	{
		name: 'cover',
		icon: cover,
		library: 'wordpress',
	},
	{
		name: 'create',
		icon: create,
		library: 'wordpress',
	},
	{
		name: 'crop',
		icon: crop,
		library: 'wordpress',
	},
	{
		name: 'currencyDollar',
		icon: currencyDollar,
		library: 'wordpress',
	},
	{
		name: 'currencyEuro',
		icon: currencyEuro,
		library: 'wordpress',
	},
	{
		name: 'currencyPound',
		icon: currencyPound,
		library: 'wordpress',
	},
	{
		name: 'customPostType',
		icon: customPostType,
		library: 'wordpress',
	},
	{
		name: 'desktop',
		icon: desktop,
		library: 'wordpress',
	},
	{
		name: 'dragHandle',
		icon: dragHandle,
		library: 'wordpress',
	},
	{
		name: 'download',
		icon: download,
		library: 'wordpress',
	},
	{
		name: 'edit',
		icon: edit,
		library: 'wordpress',
	},
	{
		name: 'external',
		icon: external,
		library: 'wordpress',
	},
	{
		name: 'file',
		icon: file,
		library: 'wordpress',
	},
	{
		name: 'flipHorizontal',
		icon: flipHorizontal,
		library: 'wordpress',
	},
	{
		name: 'flipVertical',
		icon: flipVertical,
		library: 'wordpress',
	},
	{
		name: 'formatBold',
		icon: formatBold,
		library: 'wordpress',
	},
	{
		name: 'formatCapitalize',
		icon: formatCapitalize,
		library: 'wordpress',
	},
	{
		name: 'formatIndent',
		icon: formatIndent,
		library: 'wordpress',
	},
	{
		name: 'formatIndentRTL',
		icon: formatIndentRTL,
		library: 'wordpress',
	},
	{
		name: 'formatItalic',
		icon: formatItalic,
		library: 'wordpress',
	},
	{
		name: 'formatListBullets',
		icon: formatListBullets,
		library: 'wordpress',
	},
	{
		name: 'formatListBulletsRTL',
		icon: formatListBulletsRTL,
		library: 'wordpress',
	},
	{
		name: 'formatListNumbered',
		icon: formatListNumbered,
		library: 'wordpress',
	},
	{
		name: 'formatListNumberedRTL',
		icon: formatListNumberedRTL,
		library: 'wordpress',
	},
	{
		name: 'formatLtr',
		icon: formatLtr,
		library: 'wordpress',
	},
	{
		name: 'formatLowercase',
		icon: formatLowercase,
		library: 'wordpress',
	},
	{
		name: 'formatOutdent',
		icon: formatOutdent,
		library: 'wordpress',
	},
	{
		name: 'formatOutdentRTL',
		icon: formatOutdentRTL,
		library: 'wordpress',
	},
	{
		name: 'formatRtl',
		icon: formatRtl,
		library: 'wordpress',
	},
	{
		name: 'formatStrikethrough',
		icon: formatStrikethrough,
		library: 'wordpress',
	},
	{
		name: 'formatUnderline',
		icon: formatUnderline,
		library: 'wordpress',
	},
	{
		name: 'formatUppercase',
		icon: formatUppercase,
		library: 'wordpress',
	},
	{
		name: 'fullscreen',
		icon: fullscreen,
		library: 'wordpress',
	},
	{
		name: 'gallery',
		icon: gallery,
		library: 'wordpress',
	},
	{
		name: 'globe',
		icon: globe,
		library: 'wordpress',
	},
	{
		name: 'grid',
		icon: grid,
		library: 'wordpress',
	},
	{
		name: 'group',
		icon: group,
		library: 'wordpress',
	},
	{
		name: 'handle',
		icon: handle,
		library: 'wordpress',
	},
	{
		name: 'heading',
		icon: heading,
		library: 'wordpress',
	},
	{
		name: 'help',
		icon: help,
		library: 'wordpress',
	},
	{
		name: 'helpFilled',
		icon: helpFilled,
		library: 'wordpress',
	},
	{
		name: 'inbox',
		icon: inbox,
		library: 'wordpress',
	},
	{
		name: 'institution',
		icon: institution,
		library: 'wordpress',
	},
	{
		name: 'home',
		icon: home,
		library: 'wordpress',
	},
	{
		name: 'html',
		icon: html,
		library: 'wordpress',
	},
	{
		name: 'image',
		icon: image,
		library: 'wordpress',
	},
	{
		name: 'info',
		icon: info,
		library: 'wordpress',
	},
	{
		name: 'insertAfter',
		icon: insertAfter,
		library: 'wordpress',
	},
	{
		name: 'insertBefore',
		icon: insertBefore,
		library: 'wordpress',
	},
	{
		name: 'justifyLeft',
		icon: justifyLeft,
		library: 'wordpress',
	},
	{
		name: 'justifyCenter',
		icon: justifyCenter,
		library: 'wordpress',
	},
	{
		name: 'justifyRight',
		icon: justifyRight,
		library: 'wordpress',
	},
	{
		name: 'justifySpaceBetween',
		icon: justifySpaceBetween,
		library: 'wordpress',
	},
	{
		name: 'key',
		icon: key,
		library: 'wordpress',
	},
	{
		name: 'keyboardClose',
		icon: keyboardClose,
		library: 'wordpress',
	},
	{
		name: 'keyboardReturn',
		icon: keyboardReturn,
		library: 'wordpress',
	},
	{
		name: 'layout',
		icon: layout,
		library: 'wordpress',
	},
	{
		name: 'lifesaver',
		icon: lifesaver,
		library: 'wordpress',
	},
	{
		name: 'link',
		icon: link,
		library: 'wordpress',
	},
	{
		name: 'linkOff',
		icon: linkOff,
		library: 'wordpress',
	},
	{
		name: 'list',
		icon: list,
		library: 'wordpress',
	},
	{
		name: 'listView',
		icon: listView,
		library: 'wordpress',
	},
	{
		name: 'lock',
		icon: lock,
		library: 'wordpress',
	},
	{
		name: 'login',
		icon: login,
		library: 'wordpress',
	},
	{
		name: 'loop',
		icon: loop,
		library: 'wordpress',
	},
	{
		name: 'mapMarker',
		icon: mapMarker,
		library: 'wordpress',
	},
	{
		name: 'media',
		icon: media,
		library: 'wordpress',
	},
	{
		name: 'mediaAndText',
		icon: mediaAndText,
		library: 'wordpress',
	},
	{
		name: 'megaphone',
		icon: megaphone,
		library: 'wordpress',
	},
	{
		name: 'menu',
		icon: menu,
		library: 'wordpress',
	},
	{
		name: 'mobile',
		icon: mobile,
		library: 'wordpress',
	},
	{
		name: 'more',
		icon: more,
		library: 'wordpress',
	},
	{
		name: 'moreHorizontal',
		icon: moreHorizontal,
		library: 'wordpress',
	},
	{
		name: 'moreHorizontalMobile',
		icon: moreHorizontalMobile,
		library: 'wordpress',
	},
	{
		name: 'moreVertical',
		icon: moreVertical,
		library: 'wordpress',
	},
	{
		name: 'moveTo',
		icon: moveTo,
		library: 'wordpress',
	},
	{
		name: 'navigation',
		icon: navigation,
		library: 'wordpress',
	},
	{
		name: 'overlayText',
		icon: overlayText,
		library: 'wordpress',
	},
	{
		name: 'pageBreak',
		icon: pageBreak,
		library: 'wordpress',
	},
	{
		name: 'customLink',
		icon: customLink,
		library: 'wordpress',
	},
	{
		name: 'page',
		icon: page,
		library: 'wordpress',
	},
	{
		name: 'pages',
		icon: pages,
		library: 'wordpress',
	},
	{
		name: 'paragraph',
		icon: paragraph,
		library: 'wordpress',
	},
	{
		name: 'payment',
		icon: payment,
		library: 'wordpress',
	},
	{
		name: 'percent',
		icon: percent,
		library: 'wordpress',
	},
	{
		name: 'positionCenter',
		icon: positionCenter,
		library: 'wordpress',
	},
	{
		name: 'positionLeft',
		icon: positionLeft,
		library: 'wordpress',
	},
	{
		name: 'positionRight',
		icon: positionRight,
		library: 'wordpress',
	},
	{
		name: 'post',
		icon: post,
		library: 'wordpress',
	},
	{
		name: 'pencil',
		icon: pencil,
		library: 'wordpress',
	},
	{
		name: 'people',
		icon: people,
		library: 'wordpress',
	},
	{
		name: 'pin',
		icon: pin,
		library: 'wordpress',
	},
	{
		name: 'plugins',
		icon: plugins,
		library: 'wordpress',
	},
	{
		name: 'plusCircleFilled',
		icon: plusCircleFilled,
		library: 'wordpress',
	},
	{
		name: 'plusCircle',
		icon: plusCircle,
		library: 'wordpress',
	},
	{
		name: 'plus',
		icon: plus,
		library: 'wordpress',
	},
	{
		name: 'postAuthor',
		icon: postAuthor,
		library: 'wordpress',
	},
	{
		name: 'postCategories',
		icon: postCategories,
		library: 'wordpress',
	},
	{
		name: 'postContent',
		icon: postContent,
		library: 'wordpress',
	},
	{
		name: 'postComments',
		icon: postComments,
		library: 'wordpress',
	},
	{
		name: 'postCommentsCount',
		icon: postCommentsCount,
		library: 'wordpress',
	},
	{
		name: 'postCommentsForm',
		icon: postCommentsForm,
		library: 'wordpress',
	},
	{
		name: 'postDate',
		icon: postDate,
		library: 'wordpress',
	},
	{
		name: 'postExcerpt',
		icon: postExcerpt,
		library: 'wordpress',
	},
	{
		name: 'postFeaturedImage',
		icon: postFeaturedImage,
		library: 'wordpress',
	},
	{
		name: 'postList',
		icon: postList,
		library: 'wordpress',
	},
	{
		name: 'postTerms',
		icon: postTerms,
		library: 'wordpress',
	},
	{
		name: 'previous',
		icon: previous,
		library: 'wordpress',
	},
	{
		name: 'next',
		icon: next,
		library: 'wordpress',
	},
	{
		name: 'preformatted',
		icon: preformatted,
		library: 'wordpress',
	},
	{
		name: 'pullLeft',
		icon: pullLeft,
		library: 'wordpress',
	},
	{
		name: 'pullRight',
		icon: pullRight,
		library: 'wordpress',
	},
	{
		name: 'pullquote',
		icon: pullquote,
		library: 'wordpress',
	},
	{
		name: 'queryPagination',
		icon: queryPagination,
		library: 'wordpress',
	},
	{
		name: 'queryPaginationNext',
		icon: queryPaginationNext,
		library: 'wordpress',
	},
	{
		name: 'queryPaginationNumbers',
		icon: queryPaginationNumbers,
		library: 'wordpress',
	},
	{
		name: 'queryPaginationPrevious',
		icon: queryPaginationPrevious,
		library: 'wordpress',
	},
	{
		name: 'quote',
		icon: quote,
		library: 'wordpress',
	},
	{
		name: 'receipt',
		icon: receipt,
		library: 'wordpress',
	},
	{
		name: 'redo',
		icon: redo,
		library: 'wordpress',
	},
	{
		name: 'removeBug',
		icon: removeBug,
		library: 'wordpress',
	},
	{
		name: 'removeSubmenu',
		icon: removeSubmenu,
		library: 'wordpress',
	},
	{
		name: 'replace',
		icon: replace,
		library: 'wordpress',
	},
	{
		name: 'reset',
		icon: reset,
		library: 'wordpress',
	},
	{
		name: 'resizeCornerNE',
		icon: resizeCornerNE,
		library: 'wordpress',
	},
	{
		name: 'reusableBlock',
		icon: reusableBlock,
		library: 'wordpress',
	},
	{
		name: 'rotateLeft',
		icon: rotateLeft,
		library: 'wordpress',
	},
	{
		name: 'rotateRight',
		icon: rotateRight,
		library: 'wordpress',
	},
	{
		name: 'row',
		icon: row,
		library: 'wordpress',
	},
	{
		name: 'rss',
		icon: rss,
		library: 'wordpress',
	},
	{
		name: 'search',
		icon: search,
		library: 'wordpress',
	},
	{
		name: 'separator',
		icon: separator,
		library: 'wordpress',
	},
	{
		name: 'settings',
		icon: settings,
		library: 'wordpress',
	},
	{
		name: 'share',
		icon: share,
		library: 'wordpress',
	},
	{
		name: 'shield',
		icon: shield,
		library: 'wordpress',
	},
	{
		name: 'shortcode',
		icon: shortcode,
		library: 'wordpress',
	},
	{
		name: 'siteLogo',
		icon: siteLogo,
		library: 'wordpress',
	},
	{
		name: 'stack',
		icon: stack,
		library: 'wordpress',
	},
	{
		name: 'starEmpty',
		icon: starEmpty,
		library: 'wordpress',
	},
	{
		name: 'starFilled',
		icon: starFilled,
		library: 'wordpress',
	},
	{
		name: 'starHalf',
		icon: starHalf,
		library: 'wordpress',
	},
	{
		name: 'store',
		icon: store,
		library: 'wordpress',
	},
	{
		name: 'stretchFullWidth',
		icon: stretchFullWidth,
		library: 'wordpress',
	},
	{
		name: 'styles',
		icon: styles,
		library: 'wordpress',
	},
	{
		name: 'shipping',
		icon: shipping,
		library: 'wordpress',
	},
	{
		name: 'stretchWide',
		icon: stretchWide,
		library: 'wordpress',
	},
	{
		name: 'subscript',
		icon: subscript,
		library: 'wordpress',
	},
	{
		name: 'superscript',
		icon: superscript,
		library: 'wordpress',
	},
	{
		name: 'swatch',
		icon: swatch,
		library: 'wordpress',
	},
	{
		name: 'symbol',
		icon: symbol,
		library: 'wordpress',
	},
	{
		name: 'symbolFilled',
		icon: symbolFilled,
		library: 'wordpress',
	},
	{
		name: 'tableColumnAfter',
		icon: tableColumnAfter,
		library: 'wordpress',
	},
	{
		name: 'tableColumnBefore',
		icon: tableColumnBefore,
		library: 'wordpress',
	},
	{
		name: 'tableColumnDelete',
		icon: tableColumnDelete,
		library: 'wordpress',
	},
	{
		name: 'tableRowAfter',
		icon: tableRowAfter,
		library: 'wordpress',
	},
	{
		name: 'tableRowBefore',
		icon: tableRowBefore,
		library: 'wordpress',
	},
	{
		name: 'tableRowDelete',
		icon: tableRowDelete,
		library: 'wordpress',
	},
	{
		name: 'table',
		icon: table,
		library: 'wordpress',
	},
	{
		name: 'tag',
		icon: tag,
		library: 'wordpress',
	},
	{
		name: 'termDescription',
		icon: termDescription,
		library: 'wordpress',
	},
	{
		name: 'footer',
		icon: footer,
		library: 'wordpress',
	},
	{
		name: 'header',
		icon: header,
		library: 'wordpress',
	},
	{
		name: 'sidebar',
		icon: sidebar,
		library: 'wordpress',
	},
	{
		name: 'textColor',
		icon: textColor,
		library: 'wordpress',
	},
	{
		name: 'tablet',
		icon: tablet,
		library: 'wordpress',
	},
	{
		name: 'title',
		icon: title,
		library: 'wordpress',
	},
	{
		name: 'tip',
		icon: tip,
		library: 'wordpress',
	},
	{
		name: 'tool',
		icon: tool,
		library: 'wordpress',
	},
	{
		name: 'trash',
		icon: trash,
		library: 'wordpress',
	},
	{
		name: 'trendingDown',
		icon: trendingDown,
		library: 'wordpress',
	},
	{
		name: 'trendingUp',
		icon: trendingUp,
		library: 'wordpress',
	},
	{
		name: 'typography',
		icon: typography,
		library: 'wordpress',
	},
	{
		name: 'undo',
		icon: undo,
		library: 'wordpress',
	},
	{
		name: 'ungroup',
		icon: ungroup,
		library: 'wordpress',
	},
	{
		name: 'unlock',
		icon: unlock,
		library: 'wordpress',
	},
	{
		name: 'update',
		icon: update,
		library: 'wordpress',
	},
	{
		name: 'upload',
		icon: upload,
		library: 'wordpress',
	},
	{
		name: 'verse',
		icon: verse,
		library: 'wordpress',
	},
	{
		name: 'video',
		icon: video,
		library: 'wordpress',
	},
	{
		name: 'warning',
		icon: warning,
		library: 'wordpress',
	},
	{
		name: 'widget',
		icon: widget,
		library: 'wordpress',
	},
];

wp.domReady( () => {
	addFilter(
		'themezeeAdvancedIconBlock.icons',
		'themezee/advanced-icon-block/default-icons',
		() => icons
	);
} );
